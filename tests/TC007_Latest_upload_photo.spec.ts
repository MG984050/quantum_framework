import { expect, test } from '../customFixtures/crmFixtures';

test('Upload Photo and Verify', async ({ page, contactsLeadsPage }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'Arpitha' },
        { type: 'TestCase', description: 'Upload Photo' },
        { type: 'Test Description', description: "Verifying Uploaded photo" }
    );

    const settingsPage = await contactsLeadsPage.clicksettings();

    await settingsPage.clickChooseFile(`../resources/1.png`);
    await settingsPage.clickUploadFile();
    //await page.pause();
});

