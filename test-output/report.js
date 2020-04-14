$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Vivek Bidgar/eclipse-workspace/BDDFramework/src/main/java/featurepack/pratcie.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user on Home page",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "bidgar.vivek@gmail.com",
        "test@1234"
      ],
      "line": 14,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"bidgar.vivek@gmail.com\" and \"test@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepDefn.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 10717930300,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefn.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 14651000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bidgar.vivek@gmail.com",
      "offset": 13
    },
    {
      "val": "test@1234",
      "offset": 42
    }
  ],
  "location": "loginStepDefn.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 262846300,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefn.user_clicks_on_Login_page()"
});
formatter.result({
  "duration": 26431000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefn.user_on_Home_page()"
});
formatter.result({
  "duration": 4326800,
  "status": "passed"
});
});