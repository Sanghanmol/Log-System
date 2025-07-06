module.exports = (req, res, next) => {
  const { level, message, resourceId, timestamp, traceId, spanId, commit, metadata } = req.body;
  const levels = ['error', 'warn', 'info', 'debug'];

  if (!levels.includes(level) || !message || !resourceId || !timestamp || !traceId || !spanId || !commit || typeof metadata !== 'object') {
    return res.status(400).json({ error: 'Invalid log format' });
  }
  next();
};
