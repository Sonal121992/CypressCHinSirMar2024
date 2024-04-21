//9th April 2024
// tables.cy.js

///<reference types = "cypress"/>

describe('Tables in cypress', function(){

    it('Verify the sum of table columns - Table 1', function(){
        let sum = 0 
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function(row){
            cy.log(row.find('td').last().text())
            sum = sum + Number(row.find('td').last().text())
        })
        .then(function(){
            cy.log(sum)
            expect(sum).to.eq(159)
        })
    })

    it('Verify the sum of table columns - Table 2', function(){
        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tr').each(function(row){
            cy.log(row.find('td').last().text())
            sum = sum + Number(row.find('td').last().text())
        })
        .then(function(){
            cy.log(sum)
            expect(sum).to.eq(163)
        })
    })

    function calculateAge(id, expectedTotal){
        let sum = 0
        cy.get(`#t0${id}`).find('tr').each(function(row){
            cy.log(row.find('id').last().text())
            sum = sum + Number(row.find('td').last().text())
        })
        .then(function(){
            cy.log(sum)
            expect(sum).to.eq(expectedTotal)
        })
    }

    it.only('Verify the sum of the table columns - table 1 using function loop', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        calculateAge(1, 159)
    })

    it.only('Verify the sum of the table columns - table 2 using function loop', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        calculateAge(2, 163)
    })
})