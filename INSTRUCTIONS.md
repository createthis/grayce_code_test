## Exercise

Grayce employs a team of Care Partners whose job is to assist our members. When a new member signs up for Grayce, we need to match them to a Care Partner so they can begin their interactions in the app with an assistant already assigned to them. For this exercise, your job is to form those matches. The data you need is in these two JSON files:

- A list of members who are signing up
    
    members.json
    
- The list of Care Partners
    
    care_partners.json
    

Each file contains information you can use to make the matches. Some terminology used in the data that you may need:

- The caregiver is the user who signed up for Grayce
- The care recipient is the loved one who the caregiver is taking care of. For example, this might be the elderly parent of the caregiver.
- The caregiver and care recipient might be in different locations. It’s possible there is some goofy data where the care recipient is “self” but the locations are different, you don’t need to do anything special in this case.
- Care Partners have new members assigned to them over time, and those members tend to have their problem solved and then become inactive. The active case count for Care Partners is the number of members who are demanding their attention now, but the total case count is also included. It is possible for inactive members to return with a new situation.

You should write code that:

- Reads in the data files
- Forms a match for each member based on any criteria you devise
- Writes a new JSON file with an entry for each member in the format: `{ member_id: "XXX", care_partner_id: "YYY" }` Here’s an example output file:
    
    sample_output.json
    
Write the solution in Node.js.
