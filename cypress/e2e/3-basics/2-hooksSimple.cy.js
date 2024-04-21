///<reference types = "cypress"/>

describe("Verify with login", function(){
    beforeEach(function(){
        //  "beforeEach" is used to set up a function that runs before each individual test case. 
        // This is particularly helpful in preparing the test environment for each test, 
        // ensuring that the state is consistent and isolated.

        // The "beforeEach" function takes a callback, which contains the code you want to execute before each test. 
        // This callback function can include actions like setting up test data, initializing test environments, or configuring test dependencies. 
        // By doing this, you can ensure that each test runs in a clean, consistent state, which helps in isolating the effects of individual tests and makes debugging easier.
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type('Admin')
        
    }) // as we have already written in beforeEach no need to repeat it in "it function"

    it('Verify the login with valid credentials', function(){
        cy.get('input[name="password"]').type('admin123')
        cy.get('.oxd-form-actions').click()
        cy.get('.oxd-topbar-header-breadcrumb').should('be.visible').and('have.attr','class')
    })

    it('Verify the logout credentials', function(){
        cy.get('input[name="password"]').type('admin123')
        cy.get('.oxd-form-actions').click()
        cy.get('.oxd-userdropdown-icon').click()
        cy.get('a[class="oxd-userdropdown-link"]').last().click()
        cy.get('.orangehrm-login-title').should('be.visible').and('have.attr','class')
        Cypress.on('uncaught:exception', () => {
            return false
        })
    })

    it('verify the invalid credentials', function(){
        cy.get('input[name="password"]').type('admi')
        cy.get('.oxd-form-actions').click()
        cy.get('.oxd-alert--error').should('be.visible').and('have.attr','class')
    })
})