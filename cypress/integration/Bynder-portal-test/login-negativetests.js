describe('Login & Logout functionality test', () => {
    it('Logging in with wrong password!', () => {
        cy.visit('https://wave-trial.getbynder.com/login/')
        cy.wait(1000)
        cy.title().should('eq','Wave trial')
        cy.get('input[name="username"]').type('sselvakumar@acr.org')
        cy.get('input[name="password"]').type('mar09@2020')
        cy.get('button[type="submit"]').click()
        cy.url().should('eq','https://wave-trial.getbynder.com/login')
        cy.get('p[class="cbox_messagebox"]').contains('You have entered an incorrect username or password.')
      
    })
/* Bynder portal gets locked out due to wrong attempts, but when run individually this tests passes. */

/*
    it('Logging in with non existing Ids!', () => {
        cy.visit('https://wave-trial.getbynder.com/login/')
        cy.wait(1000)
        cy.title().should('eq','Wave trial')
        cy.get('input[name="username"]').type('mounika.sdet@gmail.com')
        cy.get('input[name="password"]').type('Kumar09@2020')
        cy.get('button[type="submit"]').click()
        cy.url().should('eq','https://wave-trial.getbynder.com/login')
        cy.get('p[class="cbox_messagebox"]').contains('You have entered an incorrect username or password.')
      
    })   
*/
})