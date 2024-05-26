//23rd May 2024
// POM - Page Object Modelling
// It have import and export statements

// Why Prefer???
//Component hum ek baar do baar use kar sakte hai jaise </counter>
// To har tym usse use karne se acha hai 1 baar hi likhenge ek page par jisse POM bolte hai

// Yaha export export esiliye use kar rai kyuki kai aur hum esse import kar sakte hai
export default contactusPage

class contactusPage {

    weblocator = { // weblocator ye object hai
        contactusHeading: `h2[name="conatctme]`, // humesha yaha css selector hi use karenge ya fir class ke liye . id ke liye #
        firstname:`input[name="first_name"]`,
        lastname: `input[name="last_name"]`,
        email: `input[name="email"]`,
        comment: `textarea[name="message"]`,
        submit: `input[type="submit"]`,
        reset: `input[type="reset"]`
    }// conatct wale page par 6 element check kar sakte
    // Agar jada elements hote to object me object likhate
    fillform(fn, ln, email, commt){ // yaha function lekar validate karenge
        cy.get(this.weblocator.firstname).type(fn)// get method se form fill karenge // class me likh rai esiliye this use kiya
        cy.get(this.weblocator.lastname).type(ln)
        cy.get(this.weblocator.email).type(email)
        cy.get(this.weblocator.comment).type(commt)
    }
    // Assertion yaha nai likhenge.... wo likenge waha likhenge jaha testcase likh rai 
    formSubmit(){// formSubmit ye function hai
        cy.get(this.weblocator.submit).click()
    }
    formReset(){
        cy.get(this.weblocator.reset).click()
    }

}
// ye sab visit karne ke liye config me likhenge