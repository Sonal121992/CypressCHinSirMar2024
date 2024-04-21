// 6th April 2024
// radioButtonCheckBoxDropDown.cy.js

/// <reference types = "cypress" />

describe('Verify the radio button', function(){
    this.beforeEach(function(){
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })
    it('Verify the radio button', function(){
        // // Program 1
        // //click() //action
        // cy.get('input[value="blue"]').click()
        // // assertion
        // cy.get('input[value="blue"]').should('be.checked')
        // cy.get('input[value="green"]').should('not.be.checked')
        // cy.get('input[value="yellow"]').should('not.be.checked')
        // cy.get('input[value="orange"]').should('not.be.checked')
        // cy.get('input[value="purple"]').should('not.be.checked')

        // // Program 2
        // cy.get('input[value="yellow"]').as('yellowRadio') // we are defining the button with a common name so that we don't have to write css selector repeatedly
        // cy.get('@yellowRadio').check()
        // cy.get('@yellowRadio').should('be.checked')

        // Program 3
        // since at a time only one radio button will be checked so we doing that function call with el
        // el is the color element at a time.
        cy.get('#radio-buttons').children().filter('input[name="color"]').each(function(el){
            cy.wrap(el).check() // wrap is use to convert it into cypress command
            cy.wrap(el).should('be.checked')
        })
    })

    it('Verify the check-box', function(){ // here we can check multiple box at a time
        // // Program 1
        // //action
        // cy.get('input[value="option-1"]').click()
        // cy.get('input[value="option-2"]').click()
        // cy.get('input[value="option-3"]').click()
        // cy.get('input[value="option-4"]').click()
        // //assertion
        // cy.get('input[value="option-1"]').should('be.checked')
        // cy.get('input[value="option-2"]').should('be.checked')
        // cy.get('input[value="option-3"]').should('not.be.checked')
        // cy.get('input[value="option-4"]').should('be.checked')

        // // Program 2
        // cy.get('input[value="option-1"]').check()
        // cy.get('input[value="option-2"]').check()
        // cy.get('input[value="option-3"]').uncheck()
        // cy.get('input[value="option-4"]').check()
        // cy.get('input[value="option-1"]').should('be.checked')
        // cy.get('input[value="option-2"]').should('be.checked')
        // cy.get('input[value="option-3"]').should('not.be.checked')
        // cy.get('input[value="option-4"]').should('be.checked')

        // // Program 3
        // cy.get('input[value="option-1"]').check()
        // cy.get('input[value="option-2"]').check()
        // cy.get('input[value="option-3"]').check()
        // cy.get('input[value="option-4"]').check()
        // cy.get('input[value="option-1"]').should('be.checked')
        // cy.get('input[value="option-2"]').should('be.checked')
        // cy.get('input[value="option-3"]').should('be.checked')
        // cy.get('input[value="option-4"]').should('be.checked')

        // Program 4 ====> with a loop
        cy.get('input[type="checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
            // This program will check and uncheck both
            // above 16 line code is shortened to 2 line code
        })

    })

    it('Verify the functionality of checkbox with click', function(){
        cy.get('input[type="checkbox"]').each(function(el,index){
            if (index != 2){
                cy.wrap(el).click()
            }
        })
    })
    // Below will only check whether they are checked and will return the same those are checked
    it('Verify the functionality of checkbox - multiple', function(){ 
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
    })

    it('selecting the drop-down - normal method', function(){
        //Text
        cy.get('#dropdowm-menu-1').select('Python')
        cy.get('#dropdowm-menu-1').select('JAVA')
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-1').select('SQL')
        cy.get('#dropdowm-menu-2').select('Eclipse')
        cy.get('#dropdowm-menu-2').select('Maven')
        cy.get('#dropdowm-menu-2').select('TestNG')
        cy.get('#dropdowm-menu-2').select('JUnit')
        cy.get('#dropdowm-menu-3').select('HTML')
        cy.get('#dropdowm-menu-3').select('CSS')
        cy.get('#dropdowm-menu-3').select('JavaScript')
        cy.get('#dropdowm-menu-3').select('JQuery')
        // Value Attribute
        cy.get('#dropdowm-menu-1').select('python')
        cy.get('#dropdowm-menu-1').select('java')
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-1').select('sql')
        cy.get('#dropdowm-menu-2').select('eclipse')
        cy.get('#dropdowm-menu-2').select('maven')
        cy.get('#dropdowm-menu-2').select('testng')
        cy.get('#dropdowm-menu-2').select('junit')
        cy.get('#dropdowm-menu-3').select('html')
        cy.get('#dropdowm-menu-3').select('css')
        cy.get('#dropdowm-menu-3').select('javascript')
        cy.get('#dropdowm-menu-3').select('jquery')
    })

    it('selecting drop-down - Loop Method', function(){
        let element = ['java','maven','css']
        cy.get('.section-title').first().find('select').each(function(el, index){
            cy.wrap(el).select(element[index])
        })
    })

    it.only('Verify the disable enabled, and selected radio button', function(){
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.checked')
        cy.get('input[value="lettuce"]').should('not.be.disabled')
        cy.get('input[value="option-3"]').should('be.checked')
    })

})