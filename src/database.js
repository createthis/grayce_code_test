import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs/promises';

// Function to read JSON file
async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file ${filePath}: `, error);
        throw error;
    }
}

// Initialize the database and load data
async function initializeDatabase() {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS members (
            id INTEGER PRIMARY KEY,
            use_case TEXT
            -- other member fields
        );
        CREATE TABLE IF NOT EXISTS care_partners (
            id INTEGER PRIMARY KEY,
            current_active_cases INTEGER,
            specialties TEXT
            -- other care partner fields
        );
    `);

    // Load Members data
    const members = await readJsonFile('./data/members.json');
    await Promise.all(members.map(member => 
        db.run('INSERT INTO members (id, use_case) VALUES (?, ?)', [member.id, member.use_case])
    ));

    // Load Care Partners data
    const carePartners = await readJsonFile('./data/care_partners.json');
    await Promise.all(carePartners.map(partner => 
        db.run('INSERT INTO care_partners (id, current_active_cases, specialties) VALUES (?, ?, ?)', 
               [partner.id, partner.current_active_cases, JSON.stringify(partner.specialties)])
    ));

    console.log('Database initialized and data loaded!');
}

export { initializeDatabase };
