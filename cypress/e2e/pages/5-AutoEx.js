export default class pageDetails{
    selector = {
        AEUrl : 'https://automationexercise.com/#google_vignette',
        login : 'a[href="/login"]',
        signUpBtn : 'button[data-qa="signup-button"]',
        username : 'input[data-qa="signup-name"]',
        email : 'input[data-qa="signup-email"]',
        titleMr : '[value="Mr"]',
        titleMrs : '[value="Mrs"]',
        password : 'input[id="password"]',
        dd : 'select[id="days"]',
        mm : '[id="months"]',
        yy : 'select[id="years"]',
        newsletter : '[id="newsletter"]',
        offer : 'input[id="optin"]',
        firstName : 'input[id="first_name"]',
        lastName : '[id="last_name"]',
        company : 'input[id="last_name"]',
        address1 : 'input[id="address1"]',
        address2 : '[id="address2"]',
        country : 'select[id="country"]',
        state : ' input[id="state"]',
        city : 'input[id="city"]',
        zipcode : 'input[id="zipcode"]',
        mobile : 'input[id="mobile_number"]',
        createBtn : 'button[data-qa="create-account"]',
        acctCreated : '[data-qa="account-created"] > b',
        logout : '[href="/logout"]',
        loginEmail : 'input[data-qa="login-email"]',
        loginPassword : 'input[data-qa="login-password"]',
        loginBtn : 'button[data-qa="login-button"]',
        loginTextValidation : 'a>b'
    }

    visitUrl(){
        cy.visit(this.selector.AEUrl)
    }

    btnClick(css){
        cy.get(css).click()
    }

    newUserData(data){
        cy.get(this.selector.username).type(data.username)
        cy.get(this.selector.email).type(data.email)
    }

    validatetext(locater,text){
        cy.get(locater).should('contain',text)
    }

    newUserCreate(title,data){
        cy.get(title).check() // here we have to check box therefore check
        cy.get(this.selector.password).type(data.password) // here we have to write therefore type
        cy.get(this.selector.dd).select(data.dd)// here we are selecting from dropdown therefore use select
        cy.get(this.selector.mm).select(data.mm)
        cy.get(this.selector.yy).select(data.yy)
        cy.get(this.selector.newsletter).check()
        cy.get(this.selector.offer).check()
        cy.get(this.selector.firstName).type(data.firstName)
        cy.get(this.selector.lastName).type(data.lastName)
        cy.get(this.selector.company).type(data.company)
        cy.get(this.selector.address1).type(data.address1)
        cy.get(this.selector.address2).type(data.address2)
        cy.get(this.selector.country).select(data.country)
        cy.get(this.selector.state).type(data.state)
        cy.get(this.selector.city).type(data.city)
        cy.get(this.selector.zipcode).type(data.zipcode)
        cy.get(this.selector.mobile).type(data.mobile)
        cy.get(this.selector.createBtn).click()
    }

    loginUser(data){
        cy.get(this.selector.loginEmail).type(data.email)
        cy.get(this.selector.loginPassword).type(data.password)
        cy.get(this.selector.loginBtn).click()
    }
}