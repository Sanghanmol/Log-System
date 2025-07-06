const express = require('express');
const router = express.Router();
const { readLogs, writeLogs } = require('../utils/fileHandler');
const validateLog = require('../middleware/validateLog');

router.post('/', validateLog, async (req, res) => {
  const logs = await readLogs();
  logs.push(req.body);
  await writeLogs(logs);
  res.status(201).json({ message: 'Log stored' });
});

router.get('/', async (req, res) => {
  let logs = await readLogs();
  const { search, level, resourceId, start, end } = req.query;

  if (search) logs = logs.filter(l => l.message.toLowerCase().includes(search.toLowerCase()));
  if (level) {
    const levels = Array.isArray(level) ? level : [level];
    logs = logs.filter(l => levels.includes(l.level));
  }
  if (resourceId) logs = logs.filter(l => l.resourceId === resourceId);
  if (start) logs = logs.filter(l => new Date(l.timestamp) >= new Date(start));
  if (end) logs = logs.filter(l => new Date(l.timestamp) <= new Date(end));

  logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  res.json(logs);
});

module.exports = router;