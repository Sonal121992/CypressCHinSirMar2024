// 1st April 2024
// transverse.cy.js

/// <reference types = "cypress"/>

describe('transverse method', function(){

    // sibling method
    it('To get first DOM element within elements, use the .first() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text','Fruits')
    })

    it('To get the last DOM element within elements, use the .last() command', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text','Lentils')
    })

    it('To get a DOM element at a specific index, use the .eq() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(5).should('have.text','Figs')
    })

    it('To get children of DOM elements, use the .children() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length',11)
    })

    it('To get previous sibling DOM element within elements, use the .prev() command', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').prev().should('have.text','Milk')
    })

    it('to get next sibling DOM element within elements, use the .next() command', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').next().should('have.text','Milk')
    })
})