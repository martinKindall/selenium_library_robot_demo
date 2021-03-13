*** Settings ***
Documentation     Single test for valid login
...
Resource          resource.robot

*** Test Cases ***
Valid Login
    Open Browser To Login Page
    Input Username    ${DEFAULT USER}
    Input Password    ${DEFAULT PASSWORD}
    Press Sign in
    Input Username    ${DEFAULT USER}
    Input Password    ${DEFAULT PASSWORD}
    Submit Credentials
    Welcome Page Should Be Open
    [Teardown]    Close Browser
