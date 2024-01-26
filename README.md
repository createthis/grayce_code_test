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

   If code is disabled, this looks like:
   ```sqlite
   id|current_active_cases|specialties
   1|23|["pregnancy","self"]
   2|46|["grieving"]
   3|1|["pregnancy","adult","grieving","child"]
   4|32|["pregnancy","adult","aging_loved_one","child"]
   5|18|["adult"]
   6|12|["infant","aging_loved_one","self"]
   7|62|["aging_loved_one","child","grieving","pregnancy"]
   8|34|[]
   ```

   After the code runs it looks like:
   ```sqlite
   id|current_active_cases|specialties
   1|391|["pregnancy","self"]
   2|363|["grieving"]
   3|388|["pregnancy","adult","grieving","child"]
   4|389|["pregnancy","adult","aging_loved_one","child"]
   5|363|["adult"]
   6|411|["infant","aging_loved_one","self"]
   7|389|["aging_loved_one","child","grieving","pregnancy"]
   8|34|[]
   ```
