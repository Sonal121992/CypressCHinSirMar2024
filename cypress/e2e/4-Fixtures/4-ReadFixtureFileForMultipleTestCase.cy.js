// 8th April 2024
// How to read json file from fixture ??
// This json file contains data of only multiple user
// We are saving the user details in the json file of fixture folder.
// Here we will import the file here from examples.json
// If we save the data in fixture file then we don't to write the data here in cy.js again and again
// Even we can save the line of code writing

import examples from '../../fixtures/examples.json';

///<reference types = "cypress"/>

describe('Fixture in cypress for multiple user', function(){
    it('Reading fixture file obj-1 file import', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(examples[0].firstName)
        cy.get('input[name="last_name"]').type(examples[0].lastName)
        cy.get('input[name="email"]').type(examples[0].email)
        cy.get('textarea[name="message"]').type(examples[0].msg)
    })
    it('Reading fixtures file obj-2 file import', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(examples[1].firstName)
        cy.get('input[name="last_name"]').type(examples[1].lastName)
        cy.get('input[name="email"]').type(examples[1].email)
        cy.get('textarea[name="message"]').type(examples[1].msg)
    })
})