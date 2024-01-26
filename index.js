const readJsonFile = require('./readData');
const matchMembersWithCarePartners = require('./matchMaker');
const writeJsonFile = require('./writeData');

async function main() {
    try {
        const members = await readJsonFile('members.json');
        const carePartners = await readJsonFile('care_partners.json');

        const matches = await matchMembersWithCarePartners(members, carePartners);

        await writeJsonFile('matched_output.json', matches);

        console.log('Matching completed and written to matched_output.json');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
