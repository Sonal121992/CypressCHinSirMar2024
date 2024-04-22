// 8th April 2024
// How to check login with multiple users??

///<reference types = "cypress"/>

let students = [
    {
        firstName: "sonal",
        lastName: "khante",
        email: "sonalkhante@gmail.com",
        msg: "I am learning JS"
    },
    {
        firstName: "chetan",
        lastName: "khante",
        email: "chetan@gmail.com",
        msg: "I am learning Cypress"
    }
]

describe('fixtures with array in cypress', function(){
    // Here we are executing the whole array in one flow in one code only
    it('Verify the form details when it is given in array before describe function', function(){
        students.forEach(function(el,index){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.msg)
      })
    })

    // Here we are executing the elements from array separately, so that we can see if there is any issue with data.
    // And can see the different data executing differently 
    // can also understand how many data we have run
    // It will run as array - data 1 and array - data 2
    students.forEach(function(el,index){
        it(`array - data ${index+1}`,function(){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.msg)
        })
    })
})