// 4th May 2024

// intercept2.cy.js

/// <reference types = "cypress"/>

describe('Verify GET, POST, PUT, DELETE request with expect', function(){
    
    it('verify the GET request', function(){
        let user = "Tobias"
        let flag = false
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"       
        }).then(function(response){ // we can use anything here in place of response like res, x, whatever element we want
            cy.log(response)
            // pahale url dekar hum api hit karenge uske sath hi method batainge ki url par kya karna hai
            // fir .then block ke sath call back function pass karenge jisme hum sare log and elements find karenge
            expect(response.status).to.eq(200)
            expect(response.body.data.length).to.eq(response.body.per_page) // length is equal to per_page // 6 is equal to 6
            expect(response.body.data[0]).to.have.keys(["id","first_name","last_name","email","avatar"]) // data is in the form of array therefore 0 for 1st data
            // for 1st data we are looking the all keys are present or not
            expect(response.duration).to.lte(300)//lte means less than equal to 
            response.body.data.forEach(element => { // here we will get result for every element separate for each keys
                expect(element.id).not.have.null // Here we are checking the not null condition
                expect(element.first_name).not.have.null
                expect(element.last_name).not.have.null
                expect(element.email).not.have.null
                expect(element.avatar).not.have.null
            });
            response.body.data.forEach(el => {
                if(el.first_name == user){
                    flag = true
                }
            })
        }).then(function(){
            expect(flag).to.eq(true)
        })
    })
    // then block ke ander jo expect hai wo upar niche kai par bhi execute ho sakta hai
    // lekin hume flag = true chahiye aur ye response.body ko execute hoga tabhi
    // lekin aage next .then pahile execute hogaya to esilye dono jagah flag true likh denge
    // flag se hum particular user check kar rai hai

    it('verify the POST request', function(){
        let userData = {
            "name": "Sonal",
            "job": "Banker"
        }
        // hume payload dena padega POST me esiliye body use karenge
        // let se describe karenge and usse body me pass karenge
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: userData
        }).then(function(response){
            cy.log(response)//new data in entered new id is created
            expect(response.status).to.eq(201)
            expect(response.statusText).to.eq("Created")
            expect(response.body).to.have.keys(["name","id","job","createdAt"])// Here we will get all the keys
            expect(response.body.name).to.eq(userData.name)// sonal
            expect(response.body.job).to.eq(userData.job)// Banker
            expect(response.duration).to.lte(600)
            expect(response.body.name).not.have.null
            expect(response.body.job).not.have.null
            expect(response.body.createdAt).not.have.null
        })
    })

    it('verify the PUT request', function(){
        let updtUserData = {
            "name": "Sonal",
            "job": "Automation Tester"
        }
        cy.request({
            url:"https://reqres.in/api/users/2",
            method: "PUT",
            body: updtUserData
        }).then(function(res){
            cy.log(res)// userdata will be updated
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq("OK")
            expect(res.body.name).to.eq(updtUserData.name)
            expect(res.body.job).to.eq(updtUserData.job)
            expect(res.body).to.have.keys(["name","job","updatedAt"])
            expect(res.duration).to.lte(500)
            expect(res.body.name).not.have.null
            expect(res.body.job).not.have.null
            expect(res.body.updatedAt).not.have.null
        })

    })

    it('verify the DELETE request', function(){
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "DELETE"
        }).then(function(res){
            cy.log(res) //With this the body becomes empty
            expect(res.status).to.eq(204)
            expect(res.statusText).to.eq("No Content")
            expect(res.duration).to.lte(500)
            expect(res.body).to.eq("")
        })
    })
})