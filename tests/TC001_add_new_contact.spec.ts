import { expect, test } from '../customFixtures/crmFixtures';
import { ExcelReader } from '../utils/excelUtils';
import { FakerData } from '../utils/fakerUtils';
import { appConstants } from '../constants/appConstants';

test('Add New Contact and Verify', async ({ addContactDetailsPage, page, contactsLeadsPage }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'Arpitha' },
        { type: 'TestCase', description: 'Add new contact and verify its displayed' },
        { type: 'Test Description', description: "Verifying newly created contact is displayed in contact leads page" }
    );

    const excelReader = new ExcelReader('../resources/testdata.xlsx');
    const data = excelReader.getRowByTestcase('contact', 'TC_ID', 'TC_001');

    const contactName = FakerData.getFirstName();
    await addContactDetailsPage.enterName(contactName);
    await addContactDetailsPage.enterEmail(FakerData.getEmail());
    await addContactDetailsPage.enterPhoneNumber(data.PHONE_NUMBER);
    await addContactDetailsPage.enterCompany(FakerData.company());
    await addContactDetailsPage.checkRadio(appConstants.radioValue);
    await addContactDetailsPage.selectStatus(appConstants.selectStatus);
    await addContactDetailsPage.selectContactSorce(appConstants.selectContactSorce);
    await addContactDetailsPage.enterleadScore(appConstants.leadScore);
    await addContactDetailsPage.enterDeals(appConstants.deals);
    await addContactDetailsPage.enterTotalValue(appConstants.totalValue);
    await addContactDetailsPage.checkCheckbox(appConstants.checkboxValue);
    await addContactDetailsPage.selectPriority(appConstants.selectPriority);
    await addContactDetailsPage.enterDate(appConstants.date);
    await addContactDetailsPage.enterNotes(data.DESCRIPTION);
    contactsLeadsPage = await addContactDetailsPage.clickAddButton();

    const actualContactName = await contactsLeadsPage.isContactNameDisplayed();
    expect(actualContactName).toContain(contactName);
    //await page.pause();
});

