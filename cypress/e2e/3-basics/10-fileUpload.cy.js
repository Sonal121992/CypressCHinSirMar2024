// 16th April 2024
// fileUpload.cy.js


///<reference types = "cypress"/>

describe('Verify the file upload in cypress', function(){

    it('Verify the file upload in cypress - example 1', function(){
        cy.on('window:alert',function(str){
            expect(str).to.eq('Your file has now been uploaded!')
            return true // true means click on ok
        })
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('input[type="file"]').selectFile('C:\\Sonal\\Minskole\\CypressChinmaySirMar2024\\cypress\\fixtures\\example.json')
        cy.get('input[type="submit"]').click()
        cy.url().should('contain','example')
    })

    it('Verify the file upload in cypress - copy file in folder', function(){
        cy.on('window:alert',function(str){
            expect(str).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('input[type="file"]').selectFile('C:\\Sonal\\Minskole\\CypressChinmaySirMar2024\\cypress\\fixtures\\FileUplode Demo File 1.pdf')
        cy.get('input[type="submit"]').click()
        cy.url().should('contain','Demo')
    })

    it.only('verify the file upload in cypress - example 2', function(){
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/salesorders/new')
        cy.get('input[type="file"]').first().selectFile(["C:\\Sonal\\Minskole\\CypressChinmaySirMar2024\\cypress\\fixtures\\example.json"])
        cy.get('#ember378').should('contain',"2")// 2 means how many files we are uploading
        // id of attachment is ember378
    })
})