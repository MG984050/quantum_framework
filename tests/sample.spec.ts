// import { test } from '../customFixtures/crmFixtures';
import { AddContactDetailsPage } from '../pages/AddContactDetailsPage';
import { LoginPage } from '../pages/LoginPage';
import {test} from '@playwright/test';

// custom fixtures 

type myFixtures = {
  addContactDetailsPage: AddContactDetailsPage;
}

const myTest = test.extend<myFixtures>({
  addContactDetailsPage: async ({ page, context }, use) => {
    const loginPage = new LoginPage(page, context);
    await page.goto('https://apps.theauto-mate.com/crm');

    await loginPage.enterUsername('automate.crm');
    await loginPage.enterPassword('test@123');
    const homePage = await loginPage.clickLogin();

    const contactsLeadsPage = await homePage.clickContacts();

    const addContactDetailsPage = await contactsLeadsPage.clickAddNewContact();

use(addContactDetailsPage);

    await page.pause();

   await addContactDetailsPage.logoutUser(); 
  }

})

myTest.skip('Add New Contact and Verify -1 ', async ({ addContactDetailsPage, page }) => {
  await addContactDetailsPage.enterName('abc');
  await addContactDetailsPage.enterEmail('def');
  await addContactDetailsPage.enterPhoneNumber('rgd');

  await page.pause();
});

// myTest('Add New Contact and Verify- 2', async ({ addContactDetailsPage, page }) => {
//   await addContactDetailsPage.enterName('abc');
//   await addContactDetailsPage.enterEmail('def');
//   await addContactDetailsPage.enterPhoneNumber('rgd');

//   await page.pause();
// });

// myTest('Add New Contact and Verify- 3', async ({ addContactDetailsPage, page }) => {
//   await addContactDetailsPage.enterName('abc');
//   await addContactDetailsPage.enterEmail('def');
//   await addContactDetailsPage.enterPhoneNumber('rgd');

//   await page.pause();
// });

// myTest('Add New Contact and Verify-4', async ({ addContactDetailsPage, page }) => {
//   await addContactDetailsPage.enterName('abc');
//   await addContactDetailsPage.enterEmail('def');
//   await addContactDetailsPage.enterPhoneNumber('rgd');

//   await page.pause();
// });

// myTest('Add New Contact and Verify-5', async ({ addContactDetailsPage, page }) => {
//   await addContactDetailsPage.enterName('abc');
//   await addContactDetailsPage.enterEmail('def');
//   await addContactDetailsPage.enterPhoneNumber('rgd');

//   await page.pause();
// });


// test('Add New Contact and Verify', async ({ page, context }) => {
//   await page.goto('https://apps.theauto-mate.com/crm');

//   const loginPage = new LoginPage(page, context);
//   await loginPage.enterUsername('automate.crm');
//   await loginPage.enterPassword('test@123');
//   const homePage = await loginPage.clickLogin();

//   const contactsLeadsPage = await homePage.clickContacts();

//   const addContactDetailsPage = await contactsLeadsPage.clickAddNewContact()

//   await addContactDetailsPage.enterName('abc');
//   await addContactDetailsPage.enterEmail('def');
//   await addContactDetailsPage.enterPhoneNumber('rgd');

//   await page.pause();
// });

