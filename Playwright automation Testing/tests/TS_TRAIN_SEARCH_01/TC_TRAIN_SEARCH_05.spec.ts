import {test, expect} from "@playwright/test";

test("To verify the functionality of search whether if we add same from and to station names and search", async({page})=>{
    // Website link to open 
    await page.goto("https://www.redbus.in/railways");

    // From  station selection Operation
    await page.getByRole('combobox', {name:'From'}).click();
    await page.keyboard.type('Secunderabad');
    await page.keyboard.press('Enter');

    // To Destination station selection operation
    await page.getByRole('combobox', {name:'To'}).click();
    await page.keyboard.type('Secunderabad');
    await page.keyboard.press('Enter');

    // Selecting Date for Travel 
    await page.locator('[data-field="date"]').click();

    // To validate the search operation to show the list of trains
    await page.getByRole('button', { name: 'Search Trains', exact: true }).click();

    // To Validate that it should not show any result and should give an message 
    await expect(page.locator('[class*="Message"]')).toBeVisible();


    // Page timeout to check the process
    await page.waitForTimeout(5000);
});