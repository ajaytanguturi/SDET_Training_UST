import {test, expect} from "@playwright/test";

test("To verify the functionality of search where we can select the future dates as well", async({page})=>{

    // Website link to open 
    await page.goto("https://www.redbus.in/railways");

    // From  station selection Operation

    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('secun');
    await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();

    // To Station Selection operation 
    await page.getByRole('textbox', { name: 'To' }).fill('ong');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();

    // Future travel date selection for max of 10 days  from present date
    await page.locator('[data-field="date"]').first().waitFor();
    const date=new Date();
    date.setDate(date.getDate()+20);

    const futureDay=date.getDate().toString();
    const currentMonth=new Date().getMonth();
    const targetMonth=date.getMonth();
    if(targetMonth!== currentMonth){
        await page.locator('[aria-label^="Next month"]').last().click();
    }  
    // locate future date (for enabled dates)
    
    
    const futureDate=page.locator('div.calendarDate',{hasText:futureDay}).first();
    //ensure its visible
   
   
    //click future date
    await futureDate.click();

    //validate its selected 
    
    const journeyDate=page.locator('text=Date of Journey').locator('..');
    await expect(journeyDate).toContainText(futureDay);
    
    // Page timeout to check the process
    await page.waitForTimeout(5000);

});