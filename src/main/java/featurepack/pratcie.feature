Feature: Free CRM Login Feature

Scenario Outline: Free CRM Login Test Scenario

Given user is already on login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on Login page
And user on Home page

Examples:

|username  | password |
|bidgar.vivek@gmail.com | test@1234|