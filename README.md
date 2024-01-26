# What the heck?
As a software engineer in 2024, I can't believe I'm literally pair programming with an AI driving,
but here we are. I feel like this may become the new normal for green field projects.

If you expected me to do this test without AI assistance... ok, I get it, but I'm trying to keep
my skill set relevant here and this is new to me, so I thought I'd try it.

This test was implemented using ChatGPT 4 and the "Professional Coder" GPT to save time.

The initial prompt is recorded in PROMPT.md, but ChatGPT doesn't get it right on the first try,
so things were modified from there.

# ChatGPT transcripts
This is a cool feature. I wanted to copy the transcript, but I couldn't figure out how to do that.
Instead, apparently we can link to them.

1. This was the first attempt I made: https://chat.openai.com/share/ff24f1ef-e1e0-453e-a816-457b9f0b4fef
   (Who knows how long they keep these transcripts. I've had them delete transcripts before.
   They say anyone with the link can view it though.)
1. After that first attempt, I realized I wanted an sqlite database so that I could query the data
   and keep GPT honest. Here's my second attempt: https://chat.openai.com/share/3826cdf3-1fe5-4578-95d9-7f55d2cbcdf7

# Dependencies
I used node v16.14.0 and npm 8.3.1, if it matters. Usually it shouldn't, but sometimes it does.

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

   Reading through the code and understanding what it is doing... this looks pretty sane to me. It may not be perfect,
   but it's pretty good for quick and dirty.
