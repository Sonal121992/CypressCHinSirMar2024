/// <reference types = "cypress"/>

import page from "../pages/5-AutoEx"
import data from "../../fixtures/5-AutoExPayload"

describe("Verify login functionality", function(){
    let title = undefined
    it("Create new user", function(){

        let pg = new page
        pg.visitUrl()
        pg.btnClick(pg.selector.login)
        pg.newUserData(data)
        pg.btnClick(pg.selector.signUpBtn)

        //new user create
        if(data.title == 'Mrs'){
            title = pg.selector.titleMrs
        }else{
            title = pg.selector.titleMr
        }

        pg.newUserCreate(title,data)
        pg.validatetext(pg.selector.accountCreatedText,'Account Created!')
        pg.btnClick(pg.selector.login)
        pg.btnClick(pg.selector.logout)
        pg.loginUser(data)
        pg.validatetext(pg.selector.loginTextValidation,'Sonal')
        //cy.log(data.username)
    })
})