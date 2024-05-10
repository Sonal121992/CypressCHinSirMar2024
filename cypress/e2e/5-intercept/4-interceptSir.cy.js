// 6th May 2024

// intercept2.cy.js

/// <reference types = "cypress"/>

describe('intercept', function(){

    // Normal method
    it('wait with cy.intercept', function(){
        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }).as('GetComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@GetComment')
        cy.get('.network-comment').should('contain','laudantium enim quasi')
    })

    // try with .then function response and request
    it('wait with cy.intercept and data mapping', function(){
        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }).as('GetComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function({response, request}){
            cy.log(response.body.body)
            cy.get('.network-comment').should('have.text',response.body.body)
        })
    })

    it('wait with cy.intercept and stub network with mock', function(){
        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        },{
            body: {
                "postID": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "eliseo@gardner.biz",
                "body": "Sonal"
            }
        }).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function({response, request}){
            cy.log(response.body.body)
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })
})