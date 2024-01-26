There are three json files given:
- members.json - this is a list of Members
- care_partners.json - this is a list of Care Partners
- sample_output.json - this is the example format we want to output

We want to make matches with Care Partners and Members as follows:

- Care Partners with lower active case counts take preference.
- Match Members with Care Partners so that the Member’s use_case is found in the Care Partner’s list of specialties.
- Ideally, at any given time we want all Care Partners to have roughly the same active case count.

Each file contains information you can use to make the matches. Some terminology used in the data that you may need:

- The caregiver is the user who signed up for Grayce
- The care recipient is the loved one who the caregiver is taking care of. For example, this might be the elderly parent of the caregiver.
- The caregiver and care recipient might be in different locations. It’s possible there is some goofy data where the care recipient is “self” but the locations are different, you don’t need to do anything special in this case.
- Care Partners have new members assigned to them over time, and those members tend to have their problem solved and then become inactive. The active case count for Care Partners is the number of members who are demanding their attention now, but the total case count is also included. It is possible for inactive members to return with a new situation.

You should write code that:

- Reads in the data files
- Forms a match for each member based on the above criteria
- Writes a new JSON file with an entry for each member in the format: `{ member_id: "XXX", care_partner_id: "YYY" }` (see sample_output.json)

Write the solution in Node.js.

Ask questions if anything is unclear.
