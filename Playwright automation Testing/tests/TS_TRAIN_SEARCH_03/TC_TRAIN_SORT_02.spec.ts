import {test,expect} from '@playwright/test';

test("To verify the sort by functionality of sor by method to sort the trains based on availability", async({page})=>{
    
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

    //click the availabilty sort
    await page.getByText('Availability').click();
    //await page.waitForTimeout(3000);
    //capture availabilty texts 
    const availabilityList=await page.locator('.availability-text').allTextContents();
    //convert to Priortiy
    const priotities=availabilityList.map(status=>{
        if(status.includes('AVAILABLE')) return 1;
        if(status.includes('RAC')) return 2;
        if(status.includes('WL')) return 3;
        return 4;
    });

    await page.waitForTimeout(3000);
    //validate the sorting
    for(let i=0;i<priotities.length-1;i++){
        expect(priotities[i]).toBeLessThanOrEqual(priotities[i+1]);
    }
});