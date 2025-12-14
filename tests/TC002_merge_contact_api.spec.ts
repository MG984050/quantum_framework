import { expect, test } from '../customFixtures/crmFixtures';

test('Merge contact', async ({ apiCreateContact, contactsLeadsPage }) => {
  test.info().annotations.push(
    { type: 'Author', description: 'Arpitha' },
    { type: 'TestCase', description: 'Create new contact from API' },
    { type: 'Test Description', description: "Verifying newly created contact is displayed in contact leads page" }
  );

  console.log(`Contact Name: ` + apiCreateContact.payload.contact_name + ` Company Name: ` + apiCreateContact.payload.company + ` Status: ` + apiCreateContact.payload.status);

  const actualContactName = await contactsLeadsPage.isContactNameDisplayed();
  const actualCompanyName = await contactsLeadsPage.isCompanyNameDisplayed();
  const actualStatus = await contactsLeadsPage.isStatusDisplayed();

  expect(apiCreateContact.payload.contact_name, `Contact name not displayed:${actualContactName}`).toEqual(actualContactName);
  expect(apiCreateContact.payload.company, `Company name not displayed:${actualCompanyName}`).toContain(actualCompanyName);
  expect(apiCreateContact.payload.status, `Status name not displayed:${actualStatus}`).toEqual(actualStatus);

});

