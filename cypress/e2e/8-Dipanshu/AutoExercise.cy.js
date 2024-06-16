///<reference types="cypress" />
import page from "../pages/AutoExercise"
import data from "../../fixtures/AutoExercisePayload"

describe("verify login functionality",function(){
    let title=undefined
    it('create new user',function(){

        let pg = new page
        pg.visitUrl()
        pg.btnClick(pg.selector.loginSinup)
        pg.newUserSignUp(data)
        pg.btnClick(pg.selector.signUpBtn)

        //new user create
        if(data.title=='Mrs'){
            title=pg.selector.titleMrs
        }
        else {
            title=pg.selector.titleMr
        }

        pg.newUserCreate(title,data)
        pg.validatetext(pg.selector.accountcreatedText,'Account Created!')
        pg.btnClick(pg.selector.loginSinup)
        pg.btnClick(pg.selector.logout)
        pg.loginUser(data)
        pg.validatetext(pg.selector.loginTextValidation,data.username)
    })
})