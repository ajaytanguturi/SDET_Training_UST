import {test, expect} from "@playwright/test";
test("To Verify the functionality of search where if we try to select the past date it should restrict us from allowing", async({page})=>{
    
    // Website link to open 
    await page.goto("https://www.redbus.in/railways");

    // From  station selection Operation

    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('secun');
    await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();

    // To Station Selection operation 
    await page.getByRole('textbox', { name: 'To' }).fill('ong');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();

    // Selecting Date for Travel it should disable past dates for travel date selection 
    await page.locator('[data-field="date"]').click();

    //wait for calendar(as of now keep it march in future we can be able to change into Dynamic driven )
    await page.locator('text=March').waitFor();
    

    // get all past dates (disabled)
    const pastDates=page.locator('[aria-disabled="true"]');
    // Validate at least one exists 
    await  expect(pastDates.first()).toBeVisible();

    // capture currently selected dates
    const selectedDate=page.locator('[role="gridcell"][aria-selected="true"]');
    await expect(selectedDate).toBeVisible();
    const before=await selectedDate.textContent();

    // try clicking a past date
    await pastDates.first().click({force: true});
    const after =await selectedDate.textContent();

    //validate
    expect(before).toBe(after);
});