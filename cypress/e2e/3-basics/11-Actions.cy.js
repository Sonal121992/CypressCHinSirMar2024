// 17th  April 2024

describe('Actions Page Test Suite',()=>{
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
    });

    it('should drag and drop the draggable item',()=>{
        cy.get('#draggable').trigger('mousedown',{which: 1});
        // which: 1 ====> It is for left mouse button
        // trigger is already stored function use to perform the action
        // mousedown means to press button
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true});
        // mousemove means to move the box , trigger is use for action
        // mouseup is use to leave the hold from button, this will drop the dragged box into other box and turn it to red and 
        // and "Drop Here" text is change to "Dropped!"
        cy.get('#droppable p').should('have.text','Dropped!')
        // droppable then p tag is use because the Dropped is change in p tag
    });

    it('Verify double click with double click me button', ()=>{
        cy.get('div[id="double-click"]').dblclick();
        //double click CSS selector... dblclick already declared element
        cy.get('#double-click h2').should('have.text','Double Click Me!')
    });

    it('Verify the mouse hover action',()=>{
        cy.get('#div-hover').trigger('mouseover')
        cy.get('#div-hover a').first().should('have.text','Link 1')
    })

    // it.only('Verify the mouse hover action with sir method',()=>{ ===> Not working 
    //     cy.get('#div-hover').trigger('mouseover')
    //     cy.get('#div-hover a').should('have.text','Mouse Over Me')
    // })

    it('Verify the click and hold action',()=>{
        cy.get('#click-box').trigger('mousedown').trigger('mouseup')
        cy.get('#click-box').should('have.text','Dont release me!!!')
    })

    // it.only('should perform a click and hold action', () => { //==> Not proper Code
    //     cy.get('#click-box').trigger('mousedown').trigger('mouseup');
    //     cy.get('#click-box h1').should('have.text', 'Well done! Keep holding that click now.....');
    // });

    // it.only('Verify the right click action on the Hover link',()=>{
    //     cy.get('#div-hover').trigger('mouseover')
    //     cy.get('#div-hover a').first().click()
    //     cy.on('window:alert',(alert)=>{
    //         expect(alert).to.equal('Well done you clicked on the link!')
    //     })
    // })// Not working needs changes

    // it.only('should perform a right click action', () => { // Not possible
    //     cy.get('#right-click').rightclick();
    //     cy.on('window:alert', (alertText) => {
    //       expect(alertText).to.equal('Right click menu');
    //     });
    // });

    // it.only('should perform a keyboard press action', () => {
    //     cy.get('body').type('{uparrow}');
    //     cy.get('#keyPressed').should('have.text', 'UP');
    // });
})