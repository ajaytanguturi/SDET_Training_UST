import {test, expect} from "@playwright/test";

test("To verify the search functionality whether if we type partial station names it should suggest the relevant data ", async({page})=>{
    
    // Website link to open 
    await page.goto("https://www.redbus.in/railways");

    // From  station selection Operation

    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('secun');
    await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();

    // To Station Selection operation 
    await page.getByRole('textbox', { name: 'To' }).fill('ong');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();

    // Selecting Date for Travel 
    await page.locator('[data-field="date"]').click();

    // To remove the overlay of the date dropdown to be able to click
    await page.keyboard.press('Escape');

    // To validate the search operation to show the list of trains
    
    await page.getByRole('button', { name: 'Search Trains', exact: true }).click();

});
