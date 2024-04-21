// 31st March 2024
// basicr.cy.js

/// <reference types = "cypress"/>

describe('learn basic commands', function(){

    it('how to get title', function(){
        cy.visit('https://www.google.com/')
        cy.title().should('contain','Google') // contain ke sath text pass karate hai
    })

    it('how to get current url?', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')
    })

    it('how to get elements in cypress?', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // how to get one element
        cy.get('h2[name="contactme"]').should('have.attr','class','section_header')
        cy.contains('CONTACT US').should('have.attr','name','contactme')
        // how to get multiple elements
        cy.get('input[name]').should('have.length',3) // there are 3 functions with same element i.e. first_name, last_name and email
        // how to get element inside the node
        // default cypress way to get the element - css
    })

    // Defect - 12314434, US - US1243234234  ===> this can be any code we give to below set of code 
    // here instead of commenting the code we are using skip word and defining the code with specific number
    // because there is some defeact in the code we are going to resolve afterwords

    it.skip('how to get element in cypress', function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('label').contains('Option 1').should('be.visible') // contaons me text pass karate hai
    })

    it.only('how to get elements in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.wait(2000)
        cy.log('2 second wait over')
        cy.get('label').contains('Option 1').should('be.visible')
        cy.log('assertion done')
        cy.reload()
        cy.log('reload done')
    })
})