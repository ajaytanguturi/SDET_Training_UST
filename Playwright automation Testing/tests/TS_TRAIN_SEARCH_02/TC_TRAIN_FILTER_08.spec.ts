import {test, expect} from "@playwright/test";

test("To verify the multiple filters to check the availability of trains based on the filter requirement ", async({page})=>{

    // Website link to open 
    await page.goto("https://www.redbus.in/railways");

    // From  station selection Operation based on station code ("secunderabad jn has station code sc")

    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('sc');
    await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();

    // To Station Selection operation based on station code ("ongole  station code ogl")
    await page.getByRole('textbox', { name: 'To' }).fill('ogl');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();

    // Selecting Date for Travel 
    await page.locator('[data-field="date"]').click();
    // To remove the overlay of the date dropdown to be able to click
    await page.keyboard.press('Escape');

    // To validate the search operation to show the list of trains
    await page.getByRole('button', { name: 'Search Trains', exact: true }).click({force: true});

    //wait for page to load because now url changes 
    await page.waitForLoadState('networkidle');

    // Applying multiple filters for listing out trains based on that 

    // 1. Departing time Range
    await page.getByRole('button', {name: 'Departure time range'}).click();
    await page.getByRole('checkbox', {name: /6.00 AM - 12.00 PM/i}).click();

    // 2. Arrival time Range
    await page.getByRole('button', {name: 'Arrival time range'}).click();
    await page.locator("//div[text()='Evening']").nth(0).click();

    // 3. Apply available filter
    await page.getByRole('button', { name: 'Availability', exact: true }).click();
    await page.getByRole('checkbox', { name: 'Available only' }).click();

    // validate with the message 
    await page.locator("//div[contains(@class, 'title___d9d9bd')]");

    //Timeout process
    await page.waitForTimeout(3000);
})