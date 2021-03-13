*** Settings ***
Documentation     A resource file with reusable keywords and variables.
Library           SeleniumLibrary

*** Variables ***
${SERVER}         localhost:8080
${BROWSER}        Chrome
${DELAY}          0
${DEFAULT USER}     demo
${DEFAULT PASSWORD}    mode
${LOGIN URL}      http://${SERVER}/
${WELCOME URL}    http://${SERVER}/welcome.html
${ERROR URL}      http://${SERVER}/error.html

*** Keywords ***
Open Browser To Login Page
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Login Page Should Be Open

Login Page Should Be Open
    Title Should Be    Selenium RobotFramework

Input Username
    [Arguments]    ${username}
    Input Text    input_username    ${username}

Input Password
    [Arguments]    ${password}
    Input Text    input_password    ${password}

Press Sign in
    Click Button    sign-in-button

Submit Credentials
    Click Button    login-button

Welcome Page Should Be Open
    Location Should Be    ${WELCOME URL}
    Title Should Be    Welcome to our app

Go To Login Page
    Go To    ${LOGIN URL}
    Login Page Should Be Open
