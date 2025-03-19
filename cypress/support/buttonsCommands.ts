/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		loginButton(): Chainable<Element>;
		cartButton(): Chainable<Element>;
		checkoutButton(): Chainable<Element>;
		removeFromCartButton(): Chainable<Element>;
		addToCartButton(itemName: string): Chainable<Element>;
		continueShoppingButton(): Chainable<Element>;
		finishCheckoutButton(): Chainable<Element>;
		backToProductsButton(): Chainable<Element>;
		removeSpecificItemFromCart(itemName: string): Chainable<Element>;
		clickOnInventoryItem(itemName: string): Chainable<Element>;
		cancelButton(): Chainable<Element>;
		verifyOrderConfirmationPage(): Chainable<Element>;
		continueButton(): Chainable<Element>;
		verifyFinishButton(): Chainable<Element>;
	}
}

Cypress.Commands.add('loginButton', () => {
	cy.get('#login-button').should('be.visible').click();
});

Cypress.Commands.add('cartButton', () => {
	cy.get('.shopping_cart_link').should('be.visible').click();
});

Cypress.Commands.add('checkoutButton', () => {
	cy.contains('button', 'Checkout').should('be.visible').click();
});

Cypress.Commands.add('removeFromCartButton', () => {
	cy.contains('button', 'Remove').should('be.visible').click();
});

Cypress.Commands.add('addToCartButton', (itemName: string) => {
	cy.contains('.inventory_item_name', itemName)
		.parents('.inventory_item')
		.find('[data-test^="add-to-cart-"]')
		.should('be.visible')
		.click();
});

Cypress.Commands.add('continueShoppingButton', () => {
	cy.contains('button', 'Continue Shopping').should('be.visible').click();
});

Cypress.Commands.add('finishCheckoutButton', () => {
	cy.contains('button', 'Finish').should('be.visible').click();
});

Cypress.Commands.add('backToProductsButton', () => {
	cy.get('#back-to-products').should('be.visible').click();
});

Cypress.Commands.add('removeSpecificItemFromCart', (itemName: string) => {
	cy.get('.cart_item').should('exist'); // Verifica se há itens no carrinho
	cy.get('.cart_item')
		.contains('.inventory_item_name', itemName)
		.parents('.cart_item')
		.find('[data-test^="remove-"]')
		.should('be.visible')
		.click();
});

Cypress.Commands.add('clickOnInventoryItem', (itemName: string) => {
	cy.contains('.inventory_item_name', itemName)
		.should('be.visible') // Verifica se o item está visível
		.click(); // Clica no item
});

Cypress.Commands.add('cancelButton', () => {
	cy.contains('button', 'Cancel').should('be.visible').click();
});

Cypress.Commands.add('continueButton', () => {
	cy.get('[data-test="continue"]').should('be.visible').click();
});

Cypress.Commands.add('verifyFinishButton', () => {
	cy.contains('button', 'Finish').should('be.visible');
});
