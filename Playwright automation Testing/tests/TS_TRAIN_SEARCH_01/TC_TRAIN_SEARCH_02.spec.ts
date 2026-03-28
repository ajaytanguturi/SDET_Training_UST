// import {test, expect} from "@playwright/test";

// test("To verify the functionality of Search with empty from field  and correct to and future date", async ({page})=>{
   
//     // Website link to open 
//     await page.goto("https://www.redbus.in/railways");

//     // From  station selection Operation empty field to validate the testcase

//     /* await page.getByText('From', { exact: true }).click();

//     await page.getByRole('textbox', { name: 'From' }).fill('tvc');*/


    
//     // To Destination station selection operation 

//     /*await page.getByRole('textbox', { name: 'To' }).fill('ogl');
//   await page.getByText('OngoleOngole, Andhra PradeshOGL').click();
//     */ 

//     await page.getByRole('combobox', {name:'To'}).click();
//     await page.keyboard.type('Ongole');
//     await page.keyboard.press('Enter');

//     // Selecting Date for Travel 
//     await page.locator('[data-field="date"]').click();

//     // To validate the search operation to show the list of trains
//     await page.getByRole('button', { name: 'Search Trains', exact: true }).click();

//     // To Validate that it should not show any result and should give an message 
//     const errormsg=page.locator('text=Please enter valid source');
//     await errormsg.waitFor({state:'visible'});
//     await expect(errormsg).toBeVisible();

//     // Page timeout to check the process
//     await page.waitForTimeout(5000);
// });


import {test, expect} from '@playwright/test';
import { readExcelFile } from '../../utils/excelReader';
import { TrainSearchPOM } from '../../pages/trainSearch';

interface TrainSearchData{
  fromStation:string;
  toStation:string;
  expectedResult:string;
}

let searchPage:TrainSearchPOM;
const searchData: TrainSearchData[]=readExcelFile("search.xlsx", "Sheet2");


test.beforeEach(async({page})=>{
  page.goto("https://www.redbus.in/railways");
  searchPage=new TrainSearchPOM(page);
});

searchData.forEach((data)=>{
  test(`Validate train search from ${data.fromStation} to ${data.toStation}`, async({page})=>{
    const from=data.fromStation==='NA'?"":data.fromStation;
    const to=data.toStation==='NA'?"":data.toStation;
    await searchPage.performSearch(data.fromStation, data.toStation);
    // await page.waitForTimeout(2000);
    if(data.expectedResult==="Please enter valid source"){
      const trains=page.locator("//div[contains(@class, 'train')]");
    }else{
      await expect(page.getByText("No trains found")).toBeVisible();
    }
  });
});