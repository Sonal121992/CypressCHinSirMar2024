//8th April 2024

// Write a program to validate multiple users and use the data from fixtures file without writing import function
// this.data function

///<reference types = "cypress"/>

describe('Fixture in Cypress for multiple user from fictures file', function(){

    beforeEach(function(){
        //While importing the single user data there is no need of each elemenet
        // While importing multiple user, we have to verify the data of each user Therefore we are using beforeEach MOCHA function here
        cy.fixture('examples').then(function(data){ //Here we are importing file from fixtures with the use of fixture function
            this.data = data// Since the data is more than one and present in array then use this.data
        })
    })

    it('Reading fixture file obj-1 with beforeEach function',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data[0].firstName)
        cy.get('input[name="last_name"]').type(this.data[0].lastName)
        cy.get('input[name="email"]').type(this.data[0].email)
        cy.get('textarea[name="message"]').type(this.data[0].msg)
    })

    it('Reading fixture file obj - 2 with beforeEach Function', function(){
        cy.log(this.data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data[1].firstName)
        cy.get('input[name="last_name"]').type(this.data[1].lastName)
        cy.get('input[name="email"]').type(this.data[1].email)
        cy.get('textarea[name="message"]').type(this.data[1].msg)
    })
})