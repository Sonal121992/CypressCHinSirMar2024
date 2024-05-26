// From You Tube

// https://www.youtube.com/watch?v=ZW43ZM1yMuM

describe('Testing with various Configuration Files', ()=>{

    it('Visits the Application Based on Config File', ()=>{
        cy.visit(Cypress.env('stage_url'))
        // base url we are not giving here
        // let the base url come from the config file
        //cy.log("Printing the username " + Cypress.env('username')) // it is fetching the env varaible with cypress.env 
        // Here we have seen testcase result with both prod and stage
        // for stage case ===> We will get ===>  Printing the username testing stage
        // for prod case ---> We will get ===> Printing the username testing prod
        // This is done with config file
    });
});