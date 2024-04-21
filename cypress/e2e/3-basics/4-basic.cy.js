// 31st March 2024
// basic.cy.js

/// <reference types = "cypress"/>

describe('Verify the basic Cypress Commands', function(){ // ===> describe ===> to write the scenario

    it('Verify the title page', function(){ // title is that text which is on url
        cy.visit('https://webdriveruniversity.com/') //  cy.visit ===> to enter in the website
        cy.title().should('contain','WebDriverUniversity.com') 
    })

    it('Verify the current url', function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.url().should('contain','webdriveruniversity') // cy.url ===> se current url mil jaega // should is use as assertion
    })

// command is a built-in function used to skip a specific test, command, or assertion. 
// It is particularly useful when you want to temporarily disable or bypass a certain part of your test suite without removing it from your codebase.
    it.skip('Verify the skip built-in function', function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.log("before radio button")
        // how to find element
        // css selector
        cy.get('input[value="green"]').click()
        cy.contains('Green').should('be.visible')
        cy.get('label').contains('Option 4').should('be.visible')
        cy.contains('label', 'Option 3').should('be.visible')
        cy.log("after radio button")
    })
    // skip is use instead of commenting it, 
    // if we comment program then we are not able to see it in logs
    // while using skip we can see it in logs

    // Defect id = 124456 - User Story - 432432
    it('how to log on cypress test runner using reload, visit and wait', function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.reload()
        cy.wait(2000)
        cy.log('after 2 seconds')
        cy.reload()
        cy.log('after reload')
    })
})