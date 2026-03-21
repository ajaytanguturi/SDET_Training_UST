import {test, expect} from "@playwright/test";
// import { after } from "node:test";

test(" To verify the search functionality where we can swap the from and to stations using the double arrows button", async({page})=>{

    // Website link to open 
    await page.goto("https://www.redbus.in/railways");

    // From  station selection Operation

    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('secun');
    await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();

    // To Station Selection operation 
    await page.getByRole('textbox', { name: 'To' }).fill('ong');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();

    //capture values before swapping
    const beforeFrom=await page.locator('[aria-label*="Secunderabad"]').textContent();
    const beforeTo=await page.locator('[aria-label*="Ongole"]').textContent();

    console.log("Before swap: ", beforeFrom, beforeTo);

    //click on swap button ⇄
    await page.locator('img[alt="Swap source and destination station"]').click();

    //wait until swap is done 
    await page.waitForTimeout(2000);

    // capture after swap 
    const afterFrom=await page.locator('[aria-label*="Ongole"]').textContent();
    const afterTo=await page.locator('[aria-label*="Secunderabad"]').textContent();
    console.log("After swap: ", afterFrom, afterTo);

    //Assertions 
    await expect(afterFrom).toContain('Ongole');
    await expect(afterTo).toContain('Secunderabad');

    // Page timeout to check the process
    await page.waitForTimeout(5000);
});