const fs = require('fs').promises;

// Async function to write matched data to a JSON file
async function writeJsonFile(filePath, data) {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, jsonData, 'utf8');
}

module.exports = writeJsonFile;
