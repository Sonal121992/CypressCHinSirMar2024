// transverse.cy.js

// 3rd April 2024

///<reference types = "cypress"/>

describe('transverse method', function(){
    // children(), first(), last(), eq(), prev(), next(), nextAll(), prevAll(), sibling()

    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    // .prev()
    it('To get the previous sibling DOM element within element, using .prev()', function(){
        cy.get('#espresso').prev().should('have.text','Milk')
    })

    // .next()
    it('To get the next sibling DOM element within element, using .next()', function(){
        cy.get('#coffee').next().should('have.text','Tea')
    })
    // .nextAll()
    it('To get all next sibling using DOM elements within elements, use the .nextAll()', function(){
        cy.get('#tea').nextAll().should('have.length',3)
    })

    // .prevAll()
    it('To get all previous sibling using DOM element within elements, use the .previousAll()', function(){
        cy.get('#milk').prevAll().should('have.length',2)
    })

    // .siblings()
    it('To get all sibling using DOM element within elements, use the .siblings()', function(){
        cy.get('#espresso').siblings().should('have.length',4)
    })

    // .children() and .last()
    it('To get last DOM element within element, using .children() and .last()', function(){
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
    })

    // .first() and children()
    it('To get first DOM element within element, using .children() and .first()',function(){
        cy.get('.traversal-food-list').children().first().should('have.text','Fruits')
    })

    // .eq()
    it('To get the DOM element at the specific index, using .children() and .eq()', function(){
        cy.get('.traversal-food-list').children().eq(4).should('have.text','Cherries')
    })

    // .filter()
    it('To get DOM element that match the specific selector, use the .children() and .filter() command', function(){
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })
    
    it('To remove DOM element(s) from the set of elements, use the .children() and .not() command', function(){
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })

    // .parent()
    it('To get parent DOM element of element, using .parent() command', function(){
        cy.get('.btn-outline-info').parent().should('have.attr','class','traversal-button-states')
    })

    it.only('To get parents DOM element of element, use the .parent() command', function(){
        cy.get('#milk').parent().should('have.class','traversal-drinks-list')
    })
    
    // .find()
    it('To get descendant DOM elements of the selector, use the .find() command', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#contact_me').find('input[name="first_name"]').type('sonal')
    })

    // .nextUntil()
    it.only('To get of the next sibling DOM element within elements untill another element, use the .nextUntil() command', function(){
        cy.get('#coffee').nextUntil('#sugar').should('have.length','3')
        cy.get('#coffee').nextUntil('#espresso').should('have.length',2)
        cy.get('#coffee').nextUntil('#sugar').should('have.length.greaterThan',2)
        cy.get('#coffee').nextUntil('#sugar').should('have.length.not.be.greaterThan',4)
        //cy.get('#coffee').nextUntil('#sugar').should("be.greaterThan",'2')
        cy.get('#coffee').nextUntil('#sugar').should("not.have.lengthOf.above",4)
        cy.get('#coffee').nextUntil('#sugar').should('not.have.lengthOf.below',3)
    })

    // .prevUntil()
    it('To get the previous sibling DOm element within elements until other element, use the .prevUntil() command', function(){
        cy.get('#sugar').prevUntil('#coffee').should('have.length','3')
        cy.get('#sugar').prevUntil('#milk').should('have.length','1')
        //cy.get('#sugar').prevUntil('#coffee').should("be.greaterThan",'2')
    })
})

