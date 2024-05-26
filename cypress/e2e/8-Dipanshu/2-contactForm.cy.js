// 25th May 2024

/// <reference types = "cypress"/>

import data from "../pages/2-contactForm" //do write page in e2e for proper path
// yaha pura class import kar rai hai
describe('verify contact us page', function(){
    let selector = new data // yaha data import karne ke liye instance create kar rai hai
    // in the place of data we can use any varaible like a, hp, var, etc any thing
    it('contact us', function(){
        // Method 1

        // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.get('input[name="first_name"]).type('Sonal)

        // Normally we use write code like above but for long code it is not feasible

        // Method 2
        selector.visitUrl() 
        //selector.contactUs()
        //above selector is use for hardcode data
        // Now we will write a selector were we will pass the data here for the arguments in export written in export test case
        // So with the use of method 3 we can more number testcase

        // Method 3
        selector.contactUs('Sonal','Khante','sonalkhante@gmail.com','I am learning')

        // Now check the assertion

        cy.get('h1').should('contain','Thank You')

        // contain ===> is use to check sub part of the sentence
        // have.text ==> it check word to word of the whole sentence

    })
})