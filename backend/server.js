const express = require('express');
const cors = require('cors');
const logsRouter = require('./routes/logs');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

app.use(cors());
app.use(express.json());
app.use('/logs', logsRouter);

if (!fs.existsSync('./logs.json')) fs.writeFileSync('./logs.json', '[]');

app.use(express.static(path.join(__dirname, 'client')));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));