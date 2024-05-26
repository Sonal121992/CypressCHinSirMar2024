class contactUs{
    selectors = {
        url: 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstName: 'input[name="first_name"]',
        lastName: 'input[name="last_name"]',
        email: 'input[name="email"]',
        comments: 'textarea[name="message"]',
        submt: 'input[type="submit"]'
    }
    visitUrl(){//Function
        cy.visit(this.selectors.url)
    }
    // contactUs(){
    //     cy.get(this.selectors.firstName).type('Sonal')
    //     cy.get(this.selectors.lastName).type('Khante')
    //     cy.get(this.selectors.email).type('sonalkhante@gmail.com')
    //     cy.get(this.selectors.comments).type('I am learning Cypress')
    // } ===> to avoid doing this hardcode we use arguments like below
    // // ===> we can even pass the value using fixture file
    contactUs(fn, ln, eml, comt){
        cy.get(this.selectors.firstName).type(fn)
        cy.get(this.selectors.lastName).type(ln)
        cy.get(this.selectors.email).type(eml)
        cy.get(this.selectors.comments).type(comt)
        cy.get(this.selectors.submt).click()
    }
}
export default contactUs