/// <reference types = "cypress"/>


// test scenario - 1
describe('Validate the login functionality', function(){

    // test case 1
    it.only('Login with valid credentials', function(){
        //arrangement
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //action
        cy.get('[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        //assertion
        cy.get('h6').should('have.text','Dashboard')
        cy.get('img').should('be.visible')
        cy.get('img').should('be.visible').and('have.attr','src')
        cy.get('[class="oxd-brand-banner"]').should('be.visible')
        cy.get('.oxd-brand-banner').should('be.visible')
        cy.get('[class="oxd-topbar-header-breadcrumb"]').should('be.visible')
        cy.get('.oxd-topbar-header-breadcrumb').should('have.text','Dashboard')
        // above we have shown different types of attribute picking
    })
    
    // test case 2
    it("Login with invalid credentials", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('[name="password"]').type("Admin")
        cy.get('.orangehrm-login-action').click()
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
        cy.get('.oxd-alert-content-text').should('be.visible')
        cy.get('p').should('be.visible')
    })
})

// describe('verify the login',function(){

//     it('verify the login with valid credentials ',function(){
//         // arrangements
//         cy.visit('https://www.saucedemo.com/v1/')
//         // action 
//         cy.get('#user-name').type("standard_user")
//         cy.get('input[name="password"]').type('secret_sauce')
//         cy.get('.btn_action').click()
//         // assertion
//         cy.get('.product_label').should('be.visible').and('have.attr','class')
//     })

//     it('verify the login with invalid credentials',function(){
//         cy.visit('https://www.saucedemo.com/v1/')
//         cy.get('#user-name').type("ad")
//         cy.get('#password').type('admin123')
//         cy.get('#login-button').click()
//         cy.get('h3[data-test= "error"]').should('be.visible')
//     })
