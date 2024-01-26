
const _ = require('lodash');

// Function to match members with care partners
async function matchMembersWithCarePartners(members, carePartners) {
  console.log('members=', members.slice(0, 3));
  console.log('carePartners=', carePartners.slice(0, 3));
  // Sorting care partners by their active case count
  const sortedCarePartners = _.sortBy(carePartners, ['current_active_cases']);

  console.log('sortedCarePartners=', sortedCarePartners.slice(0, 3));

  return members.map(member => {
    // Finding a care partner whose specialties include the member's use_case
    const matchedCarePartner = sortedCarePartners.find(carePartner => 
      carePartner.specialties.includes(member.use_case) &&
      carePartner.current_active_cases <= carePartner.current_cases);

    if (matchedCarePartner) {
      // Increment the active case count of the matched care partner
      matchedCarePartner.current_active_cases++;
      return { member_id: member.id, care_partner_id: matchedCarePartner.id };
    }

    // Return null if no match is found
    return null;
  }).filter(match => match !== null); // Filtering out null matches
}

module.exports = matchMembersWithCarePartners;
