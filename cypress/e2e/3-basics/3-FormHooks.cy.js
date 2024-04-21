// 27th March 2024
// form.cy.js

/// <reference types = "cypress"/>

describe('Verify the Contact Form', function(){

    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('Verify with Valid Data', function(){
        cy.formDetails("Sonal", "Khante", "sonalkhante@gmail.com", "cypress") //command.js me jakar humne already formDetails ke naam se common elements pass kar diye hai
        //cypress.commands.add('formDetails'(yaha parameter pass karna))
        // cypress khudki command bana rai hai
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')
    })

    it('Verify with Invalid Data', function(){
        cy.formDetails("Sonal", "Khante", "sonalkhantegmail.com", "cypress")
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain','Invalid')
    })

    it('Verify the contact form with reset button', function(){
        cy.formDetails("Sonal", "Khante", "sonalkhante@gmail.com", "cypress")
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"") 
        cy.get('input[name="email"]').should('have.text','') 
        cy.get('textarea[name="message"]').should('have.text','')
    })
})