// 8th April 2024
// How to check login with multiple users??


///<reference types = "cypress"/>

let sonal = {
    firstName: "sonal",
    lastName: "khante",
    email: "sonalkhante@gmail.com",
    msg: "I am leaning JS"
}

describe('fixtures in cypress', function(){
    
    // with Object
    it('Verify the form details when it is given before describe function', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(sonal.firstName)
        cy.get('input[name="last_name"]').type(sonal.lastName)
        cy.get('input[name="email"]').type(sonal.email)
        cy.get('textarea[name="message"]').type(sonal.msg)
    })
})