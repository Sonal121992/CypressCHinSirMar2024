class orangeHRM{
    selector = {
        url : 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        userName : '[name="username"]',
        passwrd : '[type="password"]',
        lognBtn :'[type="submit"]'
    }

    visitURL(){
        cy.visit(this.selector.url)
    }

    loginUser(data){
        cy.get(this.selector.userName).type(data.username)
        cy.get(this.selector.passwrd).type(data.password)
        cy.get(this.selector.lognBtn).click()
    }
}

export default orangeHRM