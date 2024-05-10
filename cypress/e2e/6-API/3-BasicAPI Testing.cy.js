// 6th May 2024

// basicAPI.cy.js

/// <reference types = "cypress"/>

describe('Verify the API request', function(){

    it('Verify the GET request', function(){
        let found = false
        let expectedValue = "Tobias"
        cy.request({
            url:"https://reqres.in/api/users?page=2",
            method: "GET"
        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body.per_page).to.eq(response.body.data.length)
            expect(response.body.data[2]).to.have.keys(["id","email","first_name","last_name","avatar"])
            response.body.data.forEach(element=>{
                if(element.first_name == expectedValue){
                    found = true
                }
            });
            response.body.data.forEach(element=>{
                expect(element.id).be.not.null
                expect(element.email).be.not.null
                expect(element.first_name).be.not.null
                expect(element.last_name).be.not.null
                expect(element.avatar).be.not.null
            }); // here we will get each data
        })
        .then(function(){
            expect(found).to.eq(true)
        })
        //check whether value of all students data is not null
    })

    it('Verify the POST request', function(){
        let payload = {
            "name": "Sonal",
            "job": "banker"
        }
        cy.request({
            url:"https://reqres.in/api/users",
            method: "POST",
            body: payload
        })
        .then(function(response){
            cy.log(response)
            expect(response.status).to.eq(201)
            //expect(response.duration).to.be.lte(700)
            expect(response.body).to.have.keys(['name', "job", "createdAt", "id"])
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.job).to.eq(payload.job)
        })
    })

    it('Verify the PUT request', function(){
        let payload = {
            "name": "Sonal",
            "job": "Automation Tester" 
        }
        cy.request({
            url:"https://reqres.in/api/users/2",
            method: "PUT",
            body: payload
        })
        .then(function(response){
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lte(1000)
            expect(response.body).to.have.keys(['job','name','updatedAt'])
            expect(response.body.name).to.eq(payload.name)
            expect(response.body.job).to.eq(payload.job)
        })
    })

    it.only('Verify the DELETE request', function(){
        cy.request({
            url:"https://reqres.in/api/users/2",
            method: "DELETE"
        })
        .then(function(response){
            cy.log(response)
            expect(response.status).to.eq(204)
            expect(response.body).to.eq("")
        })
    })
})