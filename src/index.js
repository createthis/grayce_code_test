import { initializeDatabase } from './database.js';
import { matchMembersWithCarePartners } from './matchMaker.js';
import fs from 'fs/promises';
import sqlite3 from 'sqlite3';

async function main() {
    try {
        // Initialize the database and load data
        await initializeDatabase();

        // Open the database
        const db = new sqlite3.Database('./database.db');

        // Perform the matching
        const matches = await matchMembersWithCarePartners(db);

        // Format and save the output
        const output = Array.from(matches).map(([memberId, carePartnerId]) => ({
            member_id: memberId.toString(),
            care_partner_id: carePartnerId.toString()
        }));

        await fs.writeFile('./output/matches.json', JSON.stringify(output, null, 2));
        console.log('Matches successfully written to matches.json!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
