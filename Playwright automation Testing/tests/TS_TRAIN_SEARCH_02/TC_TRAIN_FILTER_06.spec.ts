import {test, expect} from "@playwright/test";

test("To Verify the filter functionality to filter out trains based on arrival time range ", async({page})=>{

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

    //To verify the Arrival time range filter is working fine or not 
    await page.getByRole('button', { name: 'Arrival time range', exact: true }).click();
    // await page.waitForTimeout(1000);
    await page.getByRole('checkbox', {name:/ 6.00 PM - 12.00 AM/i}).click();

    //timeout process
    await page.waitForTimeout(3000);

});
