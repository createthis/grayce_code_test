const fs = require('fs').promises;

// Async function to read JSON file and parse it
async function readJsonFile(filePath) {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

module.exports = readJsonFile;
