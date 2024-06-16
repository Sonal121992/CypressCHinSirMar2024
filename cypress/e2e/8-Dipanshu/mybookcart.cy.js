// 14th May 2024

///<reference types = "cypress"/>

import ud from "../../fixtures/bookslogin.json"

describe('Verify login using session storage', function(){

    ud.forEach(function(el,index){

        it("UI less login", function(){
            let user = {username: el.Username, password: el.Password}

            cy.request('POST','https://bookcart.azurewebsites.net/login', user)
                .its('body')
                .then(function(body){
                    cy.log(body)
                    cy.log(body.token)
                })
        })
    })
})