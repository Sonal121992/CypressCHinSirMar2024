
// Repeat of 1-detailsBeforeDescribeFunction.cy.js

// 8th April 2024
// How to read file which is declared with beforeEach function?
// Here the data is declared before describe function
// First we are performing the TestCase with single user

/// <reference types = "cypress"/>

let sonal1 = {
    firstName: "sonal1",
    lastName: "khante1",
    email: "sonalkhante1@gmail",
    msg: "We are trying single user declared in same file before describe function"
}

describe('Fixture in Cypress with Single TestCase declared before describe', function(){

    it('Reading fixture file for obj with only one testcase declared before describe', function(){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(sonal1.firstName)
            cy.get('input[name="last_name"]').type(sonal1.lastName)
            cy.get('input[name="email"]').type(sonal1.email)
            cy.get('textarea[name="message"]').type(sonal1.msg)
    })
})