// 8th April 2024

// Write a program to import fixture file from w/o import line....
// with this use before and arroe function

///<reference types = "cypress"/>

describe('Fixture in Cypress with BeforeEach and Arrow Function', function(){

    before(()=>{
        cy.fixture('example').as('data') 
        // Here the file is imported from example.json of fixtures folder without writing the import function
        // instead of import we are using the before function to import the data from fixtures file
    })

    it('reading fixture file obj-1 before and arrow function',function(){
        cy.get('@data').then(function(data){ // with @data you are importing data from example.json file 
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.msg)
        })
    })

    it.only('reading fixture file obj -1  before and arrowfunction', function () {
        cy.get('@data').then(function (data) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.msg)
        })
    
    })
})