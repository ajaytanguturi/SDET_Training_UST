import {test, expect} from '@playwright/test';
import { createBdd, DataTable } from 'playwright-bdd';

const {Given, When ,Then} = createBdd();
/* 
    created by : Ajay
    Reviewed by : Kunal
    Description : To verify the functionality of search with valid from ,to and future date
*/

Given('user is on Redbus Railway page', async ({page}) => {
  await page.goto("https://www.redbus.in/railways");
});

When('user clicks and fills the from station name', async ({page}) => {

    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('secun');
    await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();
});

When('user fills the to Station name', async ({page}) => {
    await page.getByRole('textbox', { name: 'To' }).fill('ong');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();
});

When('user picks the date', async ({page}) => {
    await page.locator('[data-field="date"]').click();
    await page.waitForLoadState('networkidle');
    await page.keyboard.press('Escape');
});

Then('user clicks the search trains button', async ({page}) => {
  await page.getByRole('button', { name: 'Search Trains', exact: true }).click({force: true});
});

/* 
    created by : Ajay
    Reviewed by : Kunal
    Description : To verify the functionality of search with Invalid from , valid to and future date
*/
When('user clicks and fills the to Station name', async ({page}) => {
    await page.getByText('To', { exact: true }).click();
    await page.getByRole('textbox', { name: 'To' }).fill('ong');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();
});

Then('error message should be displayed for missing from station', async ({page}) => {
    const errormsg=page.locator('text=Please enter valid source');
    await errormsg.waitFor({state:'visible'});
    await expect(errormsg).toBeVisible();
});

/* 
    created by : Ajay
    Reviewed by : Kunal
    Description : To verify the functionality of search with Invalid from , valid to and future date
*/
Then('error message should be displayed for missing to station', async ({page}) => {
    await expect(page.locator('[class*="Message"]')).toBeVisible();
});


/* 
    created by : Ajay
    Reviewed by : Kunal
    Description : To verify the functionality of search with today's date
*/
When('user selects the current date', async ({page}) => {
    const today= new Date().getDate().toString();
    await page.locator('//div[contains(@aria-label, "Date of Journey")]').click();
    await page.waitForSelector(`//div[@role='gridcell']`);
    await page.waitForLoadState('networkidle');
    await page.getByText(today, {exact:true}).first().click();
    await page.keyboard.press('Escape');
    await page.waitForTimeout(3000); 

});

/* 
    created by : Ajay
    Reviewed by : Kunal
    Description : To verify the functionality of search if we select same from and to station names
*/

When('user fills the same to Station name as Source station name', async ({page}) => {
    await page.getByRole('textbox', { name: 'To' }).fill('secun');
    await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();
});

Then('error message should be displayed for entering same from station and to station names', async ({page}) => {   
 await expect(page.locator('[class*="Message"]')).toBeVisible();
});

/* 
    created by : Ajay
    Reviewed by : Kunal
    Description : To verify the functionality of search whether if we type parital station name it should auto suggest relevant data
*/
When('the user clicks and starts to fills the from station name', async ({page}) => {
    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('tiru');
    await page.getByText('Tirupati, Andhra PradeshTPTY').click();
});

When('user starts to fill the to station name', async ({page}) => {
    await page.getByRole('textbox', { name: 'To' }).fill('ong');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();
});

/* 
    created by : Ajay
    Reviewed by : Kunal
    Description : To verify the functionality of search where if we enter station code it should give the station name correctly
*/

When('the user clicks and fills the from station using station code', async ({page}) => {
    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('sc');
    await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();
});

When('the user fills the to station using station code', async ({page}) => {
    await page.getByRole('textbox', { name: 'To' }).fill('ogl');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();
});