// 6th May 2024

//contactus.cy.js

/// <reference types = "cypress"/>

describe('Verify the contact us describe single testcase details in fixture folder', function(){

    // 2nd way reading fixture for one single testcase

    it('verify the fixture for single test case', function(){
        cy.fixture('example').then(function(info){

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstName)
            cy.get('input[name="last_name"]').type(info.lastName)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.msg)
        })
    })
})