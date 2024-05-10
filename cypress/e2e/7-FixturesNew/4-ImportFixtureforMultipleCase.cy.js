// 9th May 2024

// contactus3.cy.js

import data from "../../fixtures/examples.json"

/// <reference types = "cypress"/>

describe('Verify the contactus with multiple case from fixture file for diff case name diff case', function(){

    data.forEach(function(info,index){
        it(`test-data ${index+1}`,function(){ // This will automatically recreate index number
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstName)
            cy.get('input[name="last_name"]').type(info.lastName)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.msg)
        })
    })
})