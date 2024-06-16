// 28th May 2024

///<reference types = "cypress"/>

import prof from "../pages/3-orangeHRM"
import data from "../../fixtures/3-orangeHRM.json"

describe('Verify orange HRM login page', function(){
    let page = new prof
    it('Verify login with valid data', function(){
        page.visitURL()
        page.loginUser(data.valid)
        cy.get('h6').should('have.text','Dashboard')
        cy.url().should('contain','dashboard/index')
    })

    it('Verify login page for invalid data', function(){
        page.visitURL()
        page.loginUser(data.invalid)
        cy.get(".oxd-alert-content-text").should('have.text','Invalid credentials')
    })
})