// 8th April 2024
// How to read json file from fixture ??
// This json file contains data of only one user
// We are saving the user details in the json file of fixture folder.
// Here we will import the file here from example.json
// If we save the data in fixture file then we don't to write the data here in cy.js again and again
// Even we can save the line of code

import example from '../../fixtures/example.json';

///<reference types = "cypress"/>

describe('Fixtures in Cypress', function(){

    it('reading fixture file for only one testcase from import', function(){
        cy.fixture('example').then(function(el){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.msg)
        })
    })
})