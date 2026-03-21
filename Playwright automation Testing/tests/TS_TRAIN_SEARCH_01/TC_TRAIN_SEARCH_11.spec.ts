import {test, expect} from "@playwright/test";

test("To verify the functionality of search should  be able to show some list of trains based on the search data ", async({page})=>{

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
    
    // to remove the dropdown from search button 
    await page.keyboard.press('Escape');

    // To validate the search operation to show the list of trains
    await page.getByRole('button', { name: 'Search Trains', exact: true }).click({force: true});

    //wait for page to load because now url changes 
    await page.waitForLoadState('networkidle');

    // validate the results 
    const resultHeader=page.locator('[role="heading"]',{hasText: 'trains'});
    await expect(resultHeader).toBeVisible();
    await expect(resultHeader).toContainText('trains');

    //exact count of trains from text 
    const headerText=await resultHeader.textContent();
    const match=headerText?.match(/(\d+)\s*trains/i);
    const trainCount=match ? parseInt(match[0]):0;
    // const trainCount=parseInt(headerText?.match(/\d+/)[0]);
    console.log("Train count from UI is : ", trainCount);
    expect(trainCount).toBeGreaterThan(0);

    //all train cards 
    const trainList=page.locator('[class*="trainDetails"]');
    await expect(trainList.first()).toBeVisible();
    const actualCount=await trainList.count();
    console.log("Actual train cards : ", actualCount);

    expect(actualCount).toBeGreaterThan(0);

});