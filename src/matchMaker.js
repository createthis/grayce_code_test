import { open } from 'sqlite';
async function matchMembersWithCarePartners(db) {
    // Retrieve Members and Care Partners from the database
    const members = await db.all('SELECT * FROM members');
    let carePartners = await db.all('SELECT * FROM care_partners');

    // Map to store Member to Care Partner matches
    const matches = new Map();

    members.forEach(member => {
        // Filter Care Partners whose specialties align with the Member's use_case
        let eligiblePartners = carePartners.filter(partner => 
            JSON.parse(partner.specialties).includes(member.use_case));

        // Sort eligible partners by current active cases (ascending)
        eligiblePartners.sort((a, b) => a.current_active_cases - b.current_active_cases);

        if (eligiblePartners.length > 0) {
            // Select the Care Partner with the lowest active case count
            const selectedPartner = eligiblePartners[0];
            matches.set(member.id, selectedPartner.id);
            selectedPartner.current_active_cases++;

            // Update carePartners array to reflect the new case count
            carePartners = carePartners.map(p => p.id === selectedPartner.id ? selectedPartner : p);
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
