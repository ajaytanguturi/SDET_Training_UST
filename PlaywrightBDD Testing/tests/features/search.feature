Feature: Search funcionality

Scenario: To verify the functionality of search with valid from ,to and future date
Given user is on Redbus Railway page
When user clicks and fills the from station name 
And user fills the to Station name
And user picks the date 
Then user clicks the search trains button 


Scenario: To verify the functionality of search with Invalid from , valid to and future date
Given user is on Redbus Railway page
When user clicks and fills the to Station name
And user picks the date 
Then user clicks the search trains button 
And error message should be displayed for missing from station 


Scenario: To verify the functionality of search with valid from , Invalid to and valid future date
Given user is on Redbus Railway page
When user clicks and fills the from station name 
And user picks the date 
Then user clicks the search trains button 
And error message should be displayed for missing to station 


Scenario: To verify the functionality of search wit today date
Given user is on Redbus Railway page
When user selects the current date 

Scenario: To verify the functionality of search if we select same from and to station names 
Given user is on Redbus Railway page
When user clicks and fills the from station name 
And user fills the same to Station name as Source station name
And user picks the date 
Then user clicks the search trains button 
And error message should be displayed for entering same from station and to station names

Scenario: To verify the functionality of search whether if we type parital station name it should auto suggest relevant data
Given user is on Redbus Railway page
When the user clicks and starts to fills the from station name
And user starts to fill the to station name 
And user picks the date
Then user clicks the search trains button

Scenario: To verify the functionality of search where if we enter station code it should give the station name correctly
Given user is on Redbus Railway page
When the user clicks and fills the from station using station code 
And the user fills the to station using station code
And user picks the date
Then user clicks the search trains button
