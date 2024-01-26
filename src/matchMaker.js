import { open } from 'sqlite';

async function matchMembersWithCarePartners(db) {
    // Retrieve Members and Care Partners from the database
    const members = await db.all('SELECT * FROM members');
    const carePartners = await db.all('SELECT * FROM care_partners');

    // Sort Care Partners by current active cases (ascending)
    carePartners.sort((a, b) => a.current_active_cases - b.current_active_cases);

    // Map to store Member to Care Partner matches
    const matches = new Map();

    members.forEach(member => {
        // Find a Care Partner whose specialties align with the Member's use_case
        const suitablePartner = carePartners.find(partner => 
            JSON.parse(partner.specialties).includes(member.use_case) && 
            partner.current_active_cases <= carePartners[0].current_active_cases + 1 // Ensuring balanced load
        );

        if (suitablePartner) {
            matches.set(member.id, suitablePartner.id);
            suitablePartner.current_active_cases++; // Update the active case count
        }
    });

    // Update the database with the new active case counts
    for (const partner of carePartners) {
        await db.run('UPDATE care_partners SET current_active_cases = ? WHERE id = ?',
                     [partner.current_active_cases, partner.id]);
    }

    return matches;
}

export { matchMembersWithCarePartners };
