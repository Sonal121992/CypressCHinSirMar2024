// 24th April 2024
// inframe.cy.js
// Iframe is the thing which is frame into frame

///<reference types = "cypress"/>

describe("Verify the Iframe", function(){
    it('iframe 1 - jquery', function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        //cy.get('a[href= "index.html"]').should('have.text','Home') ====> 
        // ======> We cannot find element with this line of code since it is hide inside the frame
        // ===> It is under frame inside frame condition
        // The whole frame can be indentified with #frame element
        cy.get('#frame').then(function($iframe){
            //cy.log($iframe) // iframe element
            //cy.log($iframe.contents()) // document
            let iframeBody = $iframe.contents().find('body')
            cy.wrap(iframeBody).as('iframe')
            //wrap is generally use were we have to deal with non-cypress commands
            //to convert it into a Cypress chainable object. 
            // This allows you to chain Cypress commands with it and incorporate it into your test flow.
            cy.get('@iframe').find('a[href= "index.html"]').should('have.text','Home')
        })
    })
    it('iframe2 - javascript method 1', function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(iframe){
            let iframeBody = iframe[0].contentDocument.body
            cy.wrap(iframeBody).as('iframe')
            cy.get('@iframe').find('a[href= "index.html"]').should('have.text','Home')
        })
    })
    it('iframe3 - javscript method 2', function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        let frame = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        frame.find('a[href= "index.html"]').should('have.text','Home')
    })

    it('iframe 4 - javascript',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.getIframeBody('frame').find('a[href= "index.html"]').should('have.text',"Home")
        
    })

    it.only('iframe5 - javascript', function(){
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.getIframeBody('mce_0_ifr').find('p').should('have.text','Your content goes here.')
        cy.getIframeBody('mce_0_ifr').find('p').type(`{ctrl+a}{ctrl+b}`)
        cy.getIframeBody('mce_0_ifr').find('strong').first().should('have.text','Your content goes here.')
    })

})
