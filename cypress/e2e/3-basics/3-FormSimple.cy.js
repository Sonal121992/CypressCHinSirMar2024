/// <reference types = "cypress"/> 
// this reference line is written for auto suggestion

// 23rd March 2024

// test scenario-1
describe('validate the Form', function(){ // describe is a function

    //test case 1
    it('login with valid credentials', function(){ // it ==> function and  function() ==> call back function
        // arrangements
        // cy ye cypress ka obj hai
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html') // visit ye method hai
        //actions
        cy.get('input[name="first_name"]').type('Sonal')
        cy.get('[name="last_name"]').type('Khante') // we can get the ans from this by directly inside bracket material but tagname should be there 
        cy.get('[name="email"]').type('sonalkhante@gmail.com') // generally attribute is recommded with tagname
        cy.get('textarea[name="message"]').type("learning cypress")
        cy.get('input[type="submit"]').click()
        //assertion
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('login with invalid credentials', function(){ // it ==> function and  function() ==> call back function
        // arrangements
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html') 
        //actions
        cy.get('input[name="first_name"]').type('Sonal')
        cy.get('input[name="last_name"]').type('Khante')  
        cy.get('input[name="email"]').type('sonalkhantegmail.com') 
        cy.get('textarea[name="message"]').type("learning cypress")
        cy.get('input[type="submit"]').click()
        //assertion
        // cy.get('body').should('have.text','\n\n\n Error: Invalid email address\n\n\n') // ===> correct method
        cy.get('body').should('contain','Invalid')
    })

    it.only('verify form with RESEt Button', function(){
        //arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //action
        cy.get('input[name="first_name"]').type('Sonal')
        cy.get('input[name="last_name"]').type('Khante')  
        cy.get('input[name="email"]').type('sonalkhantegmail.com') 
        cy.get('textarea[name="message"]').type("learning cypress")
        cy.get('input[type="reset"]').click()
        //assertion
        cy.get('input[name="first_name"]').should('have.text','') // even we can write same for all inputs
    })
})