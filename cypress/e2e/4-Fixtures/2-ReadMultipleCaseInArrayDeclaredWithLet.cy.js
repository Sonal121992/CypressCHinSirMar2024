
// Repeat  of 2-detailsInArrayBeforeDescribeFunction.cy.js

// 8th April 2024
// How to read file which is declared with beforeEach function?
// Here the data is declared before describe function
// we are performing the TestCase for multiple user declared in same file before describe

/// <reference types = "cypress"/>

let students = [
    {
        firstName: 'Sonal',
        lastName: 'Khante',
        email: 'sonalkhante@gmail.com',
        msg: 'I am learning JS'
    },
    {
        firstName: 'Chetan',
        lastName: 'Khante',
        email: 'chetankhante@gmail.com',
        msg: 'I am learning Cypress'
    }
]

describe('fixture in cypress with multiple users array data declared in same file', function(){

    it('Reading fixture file for obj 1 with only multiple users declared before describe', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(students[0].firstName)
        cy.get('input[name="last_name"]').type(students[0].lastName)
        cy.get('input[name="email"]').type(students[0].email)
        cy.get('textarea[name="message"]').type(students[0].msg)
    })

    it('Reading fixture file for obj 2 with only multiple users declared before describe', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(students[1].firstName)
        cy.get('input[name="last_name"]').type(students[1].lastName)
        cy.get('input[name="email"]').type(students[1].email)
        cy.get('textarea[name="message"]').type(students[1].msg)
    })

    it('Reading fixture file for obj 1 and 2 with only multiple users declared before describe', function(){ // Don't do like this both data will get dump in same place like overlapping
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(students[0].firstName)
        cy.get('input[name="last_name"]').type(students[0].lastName)
        cy.get('input[name="email"]').type(students[0].email)
        cy.get('textarea[name="message"]').type(students[0].msg)
        cy.get('input[name="first_name"]').type(students[1].firstName)
        cy.get('input[name="last_name"]').type(students[1].lastName)
        cy.get('input[name="email"]').type(students[1].email)
        cy.get('textarea[name="message"]').type(students[1].msg)
    })

    // Here in in below code we are checking data in one call
    it('Reading data for obj 1 and 2 with only multiple users array declared before describe', function(){ // Best way to get done
        students.forEach(function(el,index){ // If there are multiple users declared in array use forEach with call back function
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.msg)
        })
    })

    // Now we will write code to call data differently so that we can see if there is any problem in each
    // we can monitor each data separately here 
    students.forEach(function(el,index){ 
        it.only(`array of multiple data - data ${index+1}`, function(){ // with this interpolation we can each user separately
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.msg)
        })
    })

})