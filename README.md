This was built using ChatGPT 4 and the "Professional Coder" GPT to save time.

The initial prompt is recorded in PROMPT.md, but ChatGPT doesn't get it right on the first try, so things were modified from there.

# Getting Started
1. ```bash
   npm install
   ```
1. ```bash
   rm -f database.db && node src/index.js
   ```
1. To inspect the database via the CLI tool:
   ```bash
   sqlite3 database.db
   .headers on
   select * from care_partners;
   ```
