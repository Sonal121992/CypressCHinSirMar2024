//21st May 2024

// Sarikha Ma'am

// Here in this we want to go to the greenkart webpage
// Then search the item you want
// Add it to cart
// Then go to cart
// confirm order
// confirmation msg


class HomePage{

    selector = {
        Ecommurl : 'https://rahulshettyacademy.com/seleniumPractise/#/',
        searchBox : '[class = "search-keyword"]',
        searchBtn : '[class="search-button"]',
        productLst : 'h4[class="product-name"]',
        addtoCart : '[class="product-action"]',
        cart : '[alt="Cart"]',
        proceedBtn : '[class="action-block"]>button',
        checkBox: '.chkAgree'
    }

    Visiturl(url){
        cy.visit(url)
    }

    searchProduct(prod){
        cy.get(this.selector.searchBox).type(prod)
        cy.get(this.selector.searchBtn).click()
    }

    selectProduct(product){
        cy.get(this.selector.productLst).each((el, i) => {
            //'Mushroom - 1Kg'
            let vegetable = el.text().replace('- 1 Kg','').trim()//Mushroom
            if(vegetable == product){
                cy.get(this.selector.addtoCart).eq(i).click({force:true})
            }
        })
    }

    placeOrder(){
        cy.get(this.selector.cart).click()
        cy.get(this.selector.proceedBtn).first().click()
        cy.contains('Place Order').click()
        cy.get('select').select('India')
        cy.get(this.selector.checkBox).click()
        cy.get('button').click()
    }

    ValidateTxt(){
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
    }
}

export default HomePage