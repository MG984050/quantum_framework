import { expect, test } from '../customFixtures/crmFixtures';
import {appConstants} from '../constants/appConstants';

test.describe("Verifying the Features in Contacts Leads Page", async () => {

    test('Add New Merge Leads and Verify', async ({contactsLeadsPage }) => {
        test.info().annotations.push(
            { type: 'Author', description: 'Arpitha' },
            { type: 'TestCase', description: 'Add new Merge leads' },
            { type: 'Test Description', description: "Verifying newly created merge leads is displayed in contact leads page" }
        );

        const mergeLeads = await contactsLeadsPage.clickMergeLeads();

        await mergeLeads.selectPrimaryLead(appConstants.primaryLead);
        await mergeLeads.selectDuplicateLead(appConstants.duplicateLead);
        await mergeLeads.clickMerge();
        //await page.pause();
    });

    test('Download a File', async ({ contactsLeadsPage }) => {
        test.info().annotations.push(
            { type: 'Author', description: 'Arpitha' },
            { type: 'TestCase', description: 'Download a File' },
            { type: 'Test Description', description: "Verifying Download of a File" }
        );

       await contactsLeadsPage.clickExportCSV();
    });
});
