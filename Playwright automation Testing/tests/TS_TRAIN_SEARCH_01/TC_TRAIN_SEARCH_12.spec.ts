import {test, expect} from "@playwright/test";

test("To validate the functionality of search where we dont have actual train route from the origin and destination destinatiosn , it should show nearby stations to reach destination ", async({page})=>{

    // Website link to open 
    await page.goto("https://www.redbus.in/railways");

    // From  station selection Operation

    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('kht');
    await page.getByText('Sri KalahastiSri Kalahasti, Andhra PradeshKHT').click();

    // To Station Selection operation 
    await page.getByRole('textbox', { name: 'To' }).fill('mas');
    await page.getByText('MGR Chennai CentralChennai, Tamil NaduMAS').click();

    // Selecting Date for Travel 
    await page.locator('[data-field="date"]').click();
    
    // to remove the dropdown from search button 
    await page.keyboard.press('Escape');

    // To validate the search operation to show the list of trains
    await page.getByRole('button', { name: 'Search Trains', exact: true }).click({force: true});
    
    // wait for results to load
    await page.waitForLoadState('networkidle');

    //validate the nearby trains message

    const nearbyMessage=page.getByText(/Trains available from nearby/i);

    await expect(nearbyMessage).toBeVisible();
});