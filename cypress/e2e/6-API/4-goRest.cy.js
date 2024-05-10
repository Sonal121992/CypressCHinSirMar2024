// 8th May 2024

// goRest.cy.js

/// <reference types = "cypress"/>

describe("list of users", function(){

    let token = `309d8a45b7742e8f8261021be759c82bee0a40d4bdb4338d8a39c9acef61d4f4`
    let id = undefined

    it('list of user using GET method', function(){
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Authorization": "Bearer 309d8a45b7742e8f8261021be759c82bee0a40d4bdb4338d8a39c9acef61d4f4"
            }
        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(200)
        })
    })

    // create --------> id -------> updateuser --------> delete

    // Here we are doing all the verification in one it function bcoz we want to flow one after another 
    // 1st do the process in POSTMAN 
    // In POST process we are giving the body in cy.request and also token with interpolation 
    // Then copy the id into notepad for further use same for POSTMAN also
    // do assertion to check 
    // Then do coding for PUT method after the POST method for changes with .then function
    // this .then function for PUT is inside the POST method function
    // after that write DELTE method inside the PUT method
    it.only('Verify the POST PUT and DELETE method', function(){ //===============> POST method function
        cy.request({
            method: "POST", 
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Sonal Lambat",
                "email": `sonallambat${Math.floor(Math.random()*10000)+1}@gmail.com`,
                "gender": "female",
                "status": "active"
              },
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(function(response){
            cy.log(response)// whole response
            expect(response.status).to.eq(201)
            cy.log(response.body.id) //6901036 ===> it changes everytime bcoz it generates new everytime
            id = response.body.id
            expect(response.body.name).to.eq('Sonal Lambat')
        }).then(function(){ //================================================> .then function for PUT method
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`, // this will copy id from id of POST request
                body: {
                    "name": "Sonal Khante",
                    "email": `sonalkhante${Math.floor(Math.random()*10000)+1}@gmail.com`,
                    "gender": "female",
                    "status": "active"
                  },
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(function(response){
                cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq('Sonal Khante')
            }).then(function(){ //=============================> .then function for DELETE method
                cy.request({
                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(function(response){
                    cy.log(response)
                    expect(response.status).to.eq(204)
                    expect(response.body).to.eq("")
                })
            })
        })
    })
})