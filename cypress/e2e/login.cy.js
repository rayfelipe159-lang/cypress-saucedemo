describe('Login', () => {
    it('Realizar Login com Sucesso', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    })

    it('Realizar login com usuário problemático', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('user.invalid')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service' )
        cy.url().should('eq','https://www.saucedemo.com/')
    })

        it('Realizar com usuário problem_user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        })
    it('Realizar login com performance_glitch_user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })

    it('realizar login com usuário bloqueado', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click() 
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
        
    })

    it('realizar login com usuáro error', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('error_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click() 
        
    })

    it('realizar login com usuáro visual_user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('visual_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click() 
        
    })

})
