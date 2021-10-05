describe('Login & Logout functionality test', () => {
    it('Logging into bynder!', () => {
        cy.visit('https://wave-trial.getbynder.com/login/')
        cy.wait(1000)
        cy.title().should('eq','Wave trial')
        cy.get('input[name="username"]').type('sselvakumar@acr.org')
        cy.get('input[name="password"]').type('Kumar09@2020')
        cy.get('button[type="submit"]').click()
        cy.url().should('eq','https://wave-trial.getbynder.com/account/dashboard/')
      
    })


    it('Verify user profile name is correct !', () => {
        cy.url().should('eq','https://wave-trial.getbynder.com/account/dashboard/')
        cy.get('a[class="admin-dropdown profile"]').contains('sai+mounika selvakumar')
              
    })   

    it(' Successfull Logging out of Wave Trail!', () => {
        cy.url().should('eq','https://wave-trial.getbynder.com/account/dashboard/')
        cy.get('a[class="admin-dropdown profile"]').contains('sai+mounika selvakumar')
        cy.get('a[class="admin-dropdown profile"]').click()
        cy.get('button[class="action-btn block blue"]').click()
        cy.url().should('eq','https://wave-trial.getbynder.com/login/')
      
    })
  it('Forgot Password!', () => {
        cy.visit('https://wave-trial.getbynder.com/login/')
        cy.title().should('eq','Wave trial')
        cy.get('div[class="lost-password"]').click()
        cy.url().should('eq','https://wave-trial.getbynder.com/user/forgotPassword/')
        cy.get('div[class="info"]').contains('Reset password')
      
    })
    it('Verifying the Log out message!', () => {
        cy.visit('https://wave-trial.getbynder.com/login/')
        cy.get('input[name="username"]').type('sselvakumar@acr.org')
        cy.get('input[name="password"]').type('Kumar09@2020')
        cy.get('button[type="submit"]').click()
        cy.url().should('eq','https://wave-trial.getbynder.com/account/dashboard/')
        cy.get('a[class="admin-dropdown profile"]').contains('sai+mounika selvakumar')
        cy.get('a[class="admin-dropdown profile"]').click()
        cy.get('button[class="action-btn block blue"]').click()
        cy.get('p[class="cbox_messagebox"]').contains('You have successfully logged out.')
        cy.url().should('eq','https://wave-trial.getbynder.com/login/')
      
    })

 
  })