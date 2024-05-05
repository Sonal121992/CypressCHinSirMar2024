// 3rd May 2024
// code on whatsapp by chinmay sir

/// <reference types = "cypress"/>

describe("intercept in cypress", function(){

    it('Wait with cy.intercept', function(){
        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment')
        cy.get('.network-comment').should('contain','tempora quo necessitatibus') // here we are looking wheater the given data is present orr not
    })

    it('Wait with cy.intercept and Data mapping', function(){
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function({response, request}){
            cy.log(response.body.body)
            cy.get('.network-comment').should('have.text',response.body.body)// here we are looking the whole text as response
        })
    })

    it('wait with cy.intercept and stub network with mock', function(){
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        },
        {
            body:{
                "postID":1,
                "id":1,
                "name":"id labore ex et quam laborum",
                "email":"eliseo@gardner.biz",
                "body": "sonal"
            }
        }).as('GetComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function({response, request}){
            cy.log(response.body.body)  
            cy.get('.network-comment').should('have.text',response.body.body)
        })
    })
})