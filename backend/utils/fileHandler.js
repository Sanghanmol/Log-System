const fs = require('fs').promises;
const path = './logs.json';

const readLogs = async () => {
  try {
    const data = await fs.readFile(path, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const writeLogs = async (logs) => {
  await fs.writeFile(path, JSON.stringify(logs, null, 2));
};

module.exports = { readLogs, writeLogs };