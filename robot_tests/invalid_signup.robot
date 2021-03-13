*** Settings ***
Documentation     A test suite containing tests related to invalid sign-up.
Suite Setup       Open Browser To Login Page
Suite Teardown    Close Browser
Test Setup        Go To Login Page
Test Template     Sign up With Invalid Credentials Should Fail
Resource          resource.robot

*** Test Cases ***               USER NAME        PASSWORD
Empty Username                   ${EMPTY}         something
Empty Password                   some_user        ${EMPTY}
Empty Username And Password      ${EMPTY}         ${EMPTY}

*** Keywords ***
Sign up With Invalid Credentials Should Fail
    [Arguments]    ${username}    ${password}
    Input Username    ${username}
    Input Password    ${password}
    Press Sign in
    Sign up Should Have Failed

Sign up Should Have Failed
    Location Should Be    ${ERROR URL}
    Title Should Be    Error Page
