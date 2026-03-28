// Generated from: tests\features\search.feature
import { test } from "playwright-bdd";

test.describe('Search funcionality', () => {

  test('To verify the functionality of search with valid from ,to and future date', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Redbus Railway page', null, { page }); 
    await When('user clicks and fills the from station name', null, { page }); 
    await And('user fills the to Station name', null, { page }); 
    await And('user picks the date', null, { page }); 
    await Then('user clicks the search trains button', null, { page }); 
  });

  test('To verify the functionality of search with Invalid from , valid to and future date', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Redbus Railway page', null, { page }); 
    await When('user clicks and fills the to Station name', null, { page }); 
    await And('user picks the date', null, { page }); 
    await Then('user clicks the search trains button', null, { page }); 
    await And('error message should be displayed for missing from station', null, { page }); 
  });

  test('To verify the functionality of search with valid from , Invalid to and valid future date', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Redbus Railway page', null, { page }); 
    await When('user clicks and fills the from station name', null, { page }); 
    await And('user picks the date', null, { page }); 
    await Then('user clicks the search trains button', null, { page }); 
    await And('error message should be displayed for missing to station', null, { page }); 
  });

  test('To verify the functionality of search wit today date', async ({ Given, When, page }) => { 
    await Given('user is on Redbus Railway page', null, { page }); 
    await When('user selects the current date', null, { page }); 
  });

  test('To verify the functionality of search if we select same from and to station names', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Redbus Railway page', null, { page }); 
    await When('user clicks and fills the from station name', null, { page }); 
    await And('user fills the same to Station name as Source station name', null, { page }); 
    await And('user picks the date', null, { page }); 
    await Then('user clicks the search trains button', null, { page }); 
    await And('error message should be displayed for entering same from station and to station names', null, { page }); 
  });

  test('To verify the functionality of search whether if we type parital station name it should auto suggest relevant data', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Redbus Railway page', null, { page }); 
    await When('the user clicks and starts to fills the from station name', null, { page }); 
    await And('user starts to fill the to station name', null, { page }); 
    await And('user picks the date', null, { page }); 
    await Then('user clicks the search trains button', null, { page }); 
  });

  test('To verify the functionality of search where if we enter station code it should give the station name correctly', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on Redbus Railway page', null, { page }); 
    await When('the user clicks and fills the from station using station code', null, { page }); 
    await And('the user fills the to station using station code', null, { page }); 
    await And('user picks the date', null, { page }); 
    await Then('user clicks the search trains button', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\search.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user is on Redbus Railway page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When user clicks and fills the from station name","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And user fills the to Station name","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user picks the date","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user clicks the search trains button","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user is on Redbus Railway page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user clicks and fills the to Station name","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user picks the date","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user clicks the search trains button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And error message should be displayed for missing from station","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given user is on Redbus Railway page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When user clicks and fills the from station name","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And user picks the date","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then user clicks the search trains button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"And error message should be displayed for missing to station","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given user is on Redbus Railway page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When user selects the current date","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given user is on Redbus Railway page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When user clicks and fills the from station name","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And user fills the same to Station name as Source station name","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And user picks the date","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then user clicks the search trains button","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And error message should be displayed for entering same from station and to station names","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":45,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given user is on Redbus Railway page","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When the user clicks and starts to fills the from station name","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"And user starts to fill the to station name","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"And user picks the date","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then user clicks the search trains button","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":53,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given user is on Redbus Railway page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When the user clicks and fills the from station using station code","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"And the user fills the to station using station code","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"And user picks the date","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then user clicks the search trains button","stepMatchArguments":[]}]},
]; // bdd-data-end