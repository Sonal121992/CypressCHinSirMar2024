// 6th May 2024
// contactus.cy.js

/// <reference types = "cypress"/>

describe('Verify the contact us form', function(){
    
    //1st way

    let info={
        firstName: "sonal",
        lastName: "khante",
        email: "sonalkhante@gmail.com",
        comment: "Learning JS"
    }

    it('Verify the fixture', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.comment)
    })
})