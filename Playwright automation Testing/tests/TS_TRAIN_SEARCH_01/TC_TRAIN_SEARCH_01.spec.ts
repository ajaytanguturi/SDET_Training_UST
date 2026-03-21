import {test, expect} from "@playwright/test";

test("To verify the functionality of Search with valid from, to and future date", async ({page})=>{
   
    // Website link to open 
    await page.goto("https://www.redbus.in/railways");

    // From  station selection Operation

    /* await page.getByText('From', { exact: true }).click();

    await page.getByRole('textbox', { name: 'From' }).fill('tvc');*/


    await page.getByRole('combobox', {name:'From'}).click();
    await page.keyboard.type('Secunderabad');
    await page.keyboard.press('Enter');
    
    // To Destination station selection operation 

    /*await page.getByRole('textbox', { name: 'To' }).fill('ogl');
  await page.getByText('OngoleOngole, Andhra PradeshOGL').click();
    */ 

    await page.getByRole('combobox', {name:'To'}).click();
    await page.keyboard.type('Ongole');
    await page.keyboard.press('Enter');

    // Selecting Date for Travel 
    await page.locator('[data-field="date"]').click();

    // To validate the search operation to show the list of trains
    await page.getByRole('button', { name: 'Search Trains', exact: true }).click();

    // Page timeout to check the process
    await page.waitForTimeout(5000);
});