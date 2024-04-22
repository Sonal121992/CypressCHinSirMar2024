/// <reference types="cypress" />

let students = [

    {
        firstName: "chinmay",
        lastName: "deshpande",
        email: "chinmaydeshpande010@gmail.com",
        message: "I am learning"
    },
    {
        firstName: "chinmay2",
        lastName: "deshpande",
        email: "chinmaydeshpande010@gmail.com",
        message: "I am learning"
    },
    {
        firstName: "chinmay3",
        lastName: "deshpande",
        email: "chinmaydeshpande010@gmail.com",
        message: "I am learning"
    }
]


describe('various ways to use fixture', function () {
   
    before(function () {
        cy.fixture('example2').then(function(data) {
          this.data = data;
          cy.log(data)
        })
    })
    
    it('verify the fixture files', function () {
      
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(this.data.studentOne['firstName'])
            cy.get('input[name="last_name"]').type(this.data.studentOne.lastName)
            cy.get('input[name="email"]').type(this.data.studentOne.email)
            cy.get('textarea[name="message"]').type(this.data.studentOne.message)

      
    })

    it.only('verify the fixture files', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data.studentTwo.firstName)
        cy.get('input[name="last_name"]').type(this.data.studentTwo.lastName)
        cy.get('input[name="email"]').type(this.data.studentTwo.email)
        cy.get('textarea[name="message"]').type(this.data.studentTwo.message)

  
    })



    // only for one testcase
    // it('verify the fixture files', function () {
    //     cy.fixture("example").then(function (obj) {
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(obj.firstName)
    //         cy.get('input[name="last_name"]').type(obj.lastName)
    //         cy.get('input[name="email"]').type(obj.email)
    //         cy.get('textarea[name="message"]').type(obj.message)

    //     })
    // })

      // it('verify the contact form', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(students[0].firstName)
    //     cy.get('input[name="last_name"]').type(students[0].lastName)
    //     cy.get('input[name="email"]').type(students[0].email)
    //     cy.get('textarea[name="message"]').type(students[0].message)

    // })

    // it.only('verify the contact form', function () {
    //     students.forEach(function (el) {
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(el.firstName)
    //         cy.get('input[name="last_name"]').type(el.lastName)
    //         cy.get('input[name="email"]').type(el.email)
    //         cy.get('textarea[name="message"]').type(el.message)

    //     })

    // })

      // students.forEach(function (el, index, arr) {
    //     it.only(verify the contact form dataset - ${index+1}, function() {
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(el.firstName)
    //         cy.get('input[name="last_name"]').type(el.lastName)
    //         cy.get('input[name="email"]').type(el.email)
    //         cy.get('textarea[name="message"]').type(el.message)

    //     })

    // })

})
