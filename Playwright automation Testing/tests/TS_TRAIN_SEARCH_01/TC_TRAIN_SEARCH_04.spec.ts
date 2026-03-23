import {test, expect} from "@playwright/test";

test("To verify the functionality of search where the date is automatically set to current date" , async ({page})=>{
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
    
    
    const datefield=page.locator('[aria-label="Date of Journey"]');
    const expectedDate='Date of Journey25 Mar, 2026';
    const actualDate=await datefield.textContent();
    await expect(actualDate).toBe(expectedDate);
}); 