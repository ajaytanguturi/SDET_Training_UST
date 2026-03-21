import {test, expect} from "@playwright/test";
import { after } from "node:test";

test("To verify the search functionality where we can modify the search results to modify the search and validate", async({page})=>{


    // Website link to open 
    await page.goto("https://www.redbus.in/railways");

    // From  station selection Operation

    await page.getByText('From', { exact: true }).click();
    await page.getByRole('textbox', { name: 'From' }).fill('secun');
    await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();

    // To Station Selection operation 
    await page.getByRole('textbox', { name: 'To' }).fill('ogl');
    await page.getByText('OngoleOngole, Andhra PradeshOGL').click();

    // Selecting Date for Travel 
    await page.locator('[data-field="date"]').click();
    
    // to remove the dropdown from search button 
    await page.keyboard.press('Escape');

    // To validate the search operation to show the list of trains
    await page.getByRole('button', { name: 'Search Trains', exact: true }).click({force: true});
    
    // wait for results to load
    await page.waitForLoadState('networkidle');

    //capture intital search data 
    const header=page.getByRole('heading',{name:/trains/i});
    await expect(header).toBeVisible();
    const initialText=await header.textContent();
    const initalMatch=initialText?.match(/(\d+)\s*trains/i);
    const initialCount=initalMatch? parseInt(initalMatch[1]):0;
    console.log("Initial Train count: ", initialCount);

    // Modify the travel date

    //click the next date(tomorrow)
    await page.getByRole('button', { name: 'Day After' }).click();
    await page.waitForLoadState('networkidle');

    const updatedText=await header.textContent();
    const updatedMatch=updatedText?.match(/(\d+)\s*trains/i);
    const updatedCount=updatedMatch ? parseInt(updatedMatch[1]):0;
    console.log("Updated train count (Date changed)", updatedCount);
    expect(updatedCount).toBeGreaterThan(0);

    // Modufy the From station 
    await page.getByText('Secunderabad Jn - SC').click();
    //await page.getByRole('button', { name: 'Cl ear input' }).click();
    const fromInput=page.getByRole('textbox').first();
    await fromInput.fill('bza');
    // await page.getByRole('textbox',{name: 'From'}).fill('bza');
    await page.getByText('Vijayawada JnVijayawada, Andhra PradeshBZA').click();
    await page.waitForLoadState('networkidle');
    const afterSourceChange=await header.textContent();
    expect(afterSourceChange).toContain('trains');

    //Modify the destination station

    await page.getByText('Ongole - OGL', {exact: true}).click();
     await page.getByRole('button', { name: 'Clear input' }).click();
    // await page.getByRole('textbox', {name: 'To'}).fill('vskp');
    const toInput=page.getByRole('textbox').first();
    await toInput.fill('vskp');
    await page.getByText('VisakhapatnamVisakhapatnam, Andhra PradeshVSKP').click();
    await page.waitForLoadState('networkidle');
    const finalText= await header.textContent();
    
    // after changing source and destination names 
    await page.getByRole('button', { name: 'Search' }).click();
});
