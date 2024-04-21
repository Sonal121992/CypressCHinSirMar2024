//19th April 2024
//actionsR.cy.js

///<reference types = "cypress"/>

describe('Mouse Actions',function(){
    // Drag and Droo Function
    it('Verify Drag and Drop',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove',{which:1}).trigger('mouseup',{force:true})
        cy.get('#droppable').should('contain','Dropped')
    })

    // Double Click Function
    it('Verify double click', function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        //cy.get('#double-click').trigger('dblclick').should('have.class','double')
        //cy.get('#double-click').dblclick().should('have.class','double')
        cy.get('#double-click').dblclick().should('have.text','\n Double Click Me!\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
    })

    // Right Click Function
    it('Verify the Right Click',function(){
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one').first().rightclick()
        //cy.get('body > ul > li.context-menu-item.context-menu-icon.context-menu-icon-cut > span').should('be.visible')
        //cy.get('body > ul > li.context-menu-item.context-menu-icon.context-menu-icon-edit > span').should('be.visible')
        cy.get('body > ul > li.context-menu-item.context-menu-icon.context-menu-icon-copy > span').should('be.visible')
    })

    // Mouse Over Function
    it('Verify the Mouse over with web university site', function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html#')
        cy.get('.dropdown').first().trigger('mouseover')
        cy.get('.dropdown a').first().should('have.text','Link 1')
    })

    it('Verify the mouse over with opencart site', function(){
        cy.visit('https://demo.opencart.com/')
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible')
        cy.get('#narbar-menu > ul > li:nth-child(1) > a').trigger('mouseover').click()
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible')
    })

    // ScrollIntoView ====> for scrolling
    it('Verify the ScrollIntoView', function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').scrollIntoView({duration:2000})
    })

    // Click and Hold
    it('Verify the Click and Hold', function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html#')
        cy.get('#click-box').trigger('mousedown').trigger('mouseup')
        cy.get('#click-box').should('have.text','Dont release me!!!')
    })

    it('Verify the click and hold with sir method', function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html#')
        cy.get('#click-box').find('p').should('have.text','Click and Hold!')
        cy.get('#click-box').trigger('mousedown',{button:0})
        cy.get('#click-box').should('contain','Well done!')
        cy.get('#click-box').trigger('mouseup',{button:0})
        cy.get('#click-box').should('contain','Dont release me!!!')
    })

    it.only(' Verify the Autosuggestive Drop Down', function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('input[id="myInput"]').type('A')
        cy.get('.autocomplete-items').children().each(function(el){ // here element can be written as '#myInputautocomplete-list' or 'div[id ="myInputautocomplete-list"]'
            cy.log(el.text())
            if(el.text().includes('Almond')){
                cy.wrap(el).click()
            }
        })
        cy.get('#submit-button').click()
        cy.url().should('contain',"Almond")
    })
    
})

// 