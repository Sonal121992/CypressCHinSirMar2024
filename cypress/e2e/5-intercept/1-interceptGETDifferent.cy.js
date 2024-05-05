// 1st May 2024
// intercept.cy.js

/// <reference types = "cypress"/>

describe('intercept in cypress', function(){

    it('TestCase one normal way', function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait(3000)
        cy.get('.network-comment').should('contain','laudantium enim quasi')
    })

    it('TestCase one with intercept to get direct text', function(){
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(info){
            cy.log(info)
            expect(info.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('contain','laudantium enim quasi')
        })
    })

    it('TestCase two with intercept instead of direct text', function(){
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(info){
            cy.log(info) // object{10} // yaha log object par jake right click karke inspect karna to log pura dekhiga
            // uss log se hum expect ka path find kar paege
            expect(info.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('be.visible') // to be visible
            cy.get('.network-comment').should('have.text',info.response.body.body) // will get text in log
        })
    })

    it.only('TestCase three with let variable text as undefined', function(){
        let text = undefined
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        })
        .then(function(info){
            text = info.body.body
        })
        .then(function(){
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.get('.network-comment').should('have.text', text)// will get actual text in log
        })
    })
})
