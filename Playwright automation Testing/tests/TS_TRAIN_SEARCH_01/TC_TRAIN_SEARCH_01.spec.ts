// import {test, expect} from "@playwright/test";

// test("To verify the functionality of Search with valid from, to and future date", async ({page})=>{
   
//     // Website link to open 
//     await page.goto("https://www.redbus.in/railways");

//     // From  station selection Operation

//     await page.getByText('From', { exact: true }).click();
//     await page.getByRole('textbox', { name: 'From' }).fill('secun');
//     await page.getByText('Secunderabad JnHyderabad, TelanganaSC').click();
    
//     // To Destination station selection operation 

//     await page.getByRole('textbox', { name: 'To' }).fill('ong');
//     await page.getByText('OngoleOngole, Andhra PradeshOGL').click();

//     // Selecting Date for Travel 
//     await page.locator('[data-field="date"]').click();
//     //escape button 
//     await page.keyboard.press('Escape');

//     // To validate the search operation to show the list of trains
//     await page.getByRole('button', { name: 'Search Trains', exact: true }).click({force: true});

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
const searchData: TrainSearchData[]=readExcelFile("search.xlsx", "Sheet1");


test.beforeEach(async({page})=>{
  page.goto("https://www.redbus.in/railways");
  searchPage=new TrainSearchPOM(page);
});

searchData.forEach((data)=>{
  test(`Validate train search from ${data.fromStation} to ${data.toStation}`, async({page})=>{
    await searchPage.performSearch(data.fromStation, data.toStation);
    await page.waitForTimeout(2000);
    if(data.expectedResult==="results"){
      const trains=page.locator("//div[contains(@class, 'train')]");
    }else{
      await expect(page.getByText("No trains found")).toBeVisible();
    }
  });
});