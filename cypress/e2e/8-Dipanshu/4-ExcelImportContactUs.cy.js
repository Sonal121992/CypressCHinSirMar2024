// 29th May 2024

///<reference types = "cypress"/>

describe ('Verify conatct us page with excel data sheet',()=>{
    it('read data from excel', function(){

        cy.parseXlsx('C:/Sonal/Minskole/CypressChinmaySirMar2024/cypress/fixtures/ExcelImContactUsFormDetails.xlsx').then((jsonData)=>{
            cy.log(jsonData[0].data[1])//zero for sheet 1 and data number 1
            for(let i=1; i<jsonData[0].data.length; i++){ // sheet ki total length
                cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

                cy.get('[name="first_name"]').type(jsonData[0].data[i][0])//for data no 1
                cy.get('[name="last_name"]').type(jsonData[0].data[i][1])// for data no 2
                cy.get('[name="email"]').type(jsonData[0].data[i][2])// for data no 3
                cy.get('[name="message"]').type(jsonData[0].data[i][3])// for data no 4
                cy.get('[value="SUBMIT"]').click()
                cy.get('h1').should('have.text',"Thank You for your Message!") 
            }
        })
    })
})