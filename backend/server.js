const express = require('express');
const cors = require('cors');
const logsRouter = require('./routes/logs');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/logs', logsRouter);

if (!fs.existsSync('./logs.json')) fs.writeFileSync('./logs.json', '[]');

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));