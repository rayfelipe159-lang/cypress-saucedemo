describe('Login', () => {
    it('Realizar Login com Sucesso', () => {
        // Arange
        cy.visit('https://www.saucedemo.com/')

        // Act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        // Assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    })
    it.only('Realizar Login informando credenciais inválidas', () => {
        //Arange
        cy.visit('https://www.saucedemo.com/')

        //act
        cy.get('[data-test="username"]').type('user.invalid')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //assert
        cy.get('[data-test="error"]')
        .should(
            'contain.text', 
            'Epic sadface: Username and password do not match any user in this service'
         )

        cy.url().should('eq','https://www.saucedemo.com/')
    })
})
