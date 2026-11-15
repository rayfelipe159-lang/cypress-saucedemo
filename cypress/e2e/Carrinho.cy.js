describe('Carrinho', () =>{
    beforeEach(() => {
        //login
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        //adiciona produto e preenche o checkout
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#shopping_cart_container').click ()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Rayan')
        cy.get('[data-test="lastName"]').type('Ramos')
        cy.get('[data-test="postalCode"]').type('555-555/48')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
    })

    //Conclui a compra mas segue no site
    it('Concluir a compra e voltar para tela dos produtos', () => {
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })

    //conclui a compra e gera o PDF
    it('Gerar PDF da compra', () => {
        cy.get('[data-test="generate-pdf-order"]').click()
    })



})