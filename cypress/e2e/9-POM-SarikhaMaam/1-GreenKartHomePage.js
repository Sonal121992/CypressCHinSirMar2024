// 22nd May 2024

import HomePage from "./1-GreenKart";

describe('E-Commerce Site', ()=> {
    
    let select = new HomePage

    it('POM',()=>{
        select.Visiturl(select.selector.Ecommurl)
        select.searchProduct('mu')
        select.searchProduct('Mushroom')
        select.placeOrder()
        select.ValidateTxt()
    })
})