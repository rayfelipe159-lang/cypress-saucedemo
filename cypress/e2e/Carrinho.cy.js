describe('Carrinho', () =>{
    it('Adicionar item ao carrinho com sucesso', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        //Act
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#shopping_cart_container').click ()


        //Assure
        cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1')
        cy.contains('Sauce Labs Backpack').should('be.visible')

        


    })
})