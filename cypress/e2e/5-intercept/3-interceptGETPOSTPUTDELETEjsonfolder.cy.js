// 3rd May 2024
// jsonholder.cypress.io
// without .then function
// this is basically the CURD operation
// C ==> Create
// U ==> Update
// R ==> Retrieve
// D ==> Delete

/// <reference types = "cypress"/>

describe('Verify GET, POST, PUT button', function(){
    it('verify GET button', function(){
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"  
        }).as('getButton')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getButton').then(function(res){
            cy.log(res)
            cy.log(res.response.body.body)// here we get the text from the body in the log form
            cy.get('.network-comment').should('have.text',res.response.body.body)// Here we are getting the text with the class element
        })
    })

    it('verify POST button', function(){
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as('postButton')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postButton').then(function(res){
            cy.log(res)
            cy.log(res.response.statusCode)// will direct ans as 201
            expect(res.response.statusCode).to.eq(201) // here we are doing assertion
            cy.get('.network-post-comment').should('have.text','POST successful!')
        })
    })

    it('verify PUT button', function(){
        cy.intercept({
            method: "PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('updateButton')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateButton').then(function(res){
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.statusMessage).to.eq("OK")
        })
    })

})