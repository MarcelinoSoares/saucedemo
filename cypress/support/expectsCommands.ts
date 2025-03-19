// Add custom commands to Cypress
declare namespace Cypress {
	interface Chainable<Subject = any> {
		verifyInventoryPage(): Chainable<Subject>;
		verifyCartPage(): Chainable<Subject>;
		verifyCheckoutPage(): Chainable<Subject>;
		itemNotExistsFromCart(itemName: string): Chainable<Subject>;
		itemExistFromCart(itemName: string): Chainable<Subject>;
		shouldMessageError(message: string): Chainable<Subject>;
		shouldCartBadgeCount(count: number): Chainable<Subject>;
		verifyItemListed(itemName: string): Chainable<Subject>;
		verifyAddToCartButtonVisible(): Chainable<Subject>;
		verifyCartIsEmpty(): Chainable<Subject>;
		verifyFirstItemPrice(expectedPrice: string): Chainable<Subject>;
		verifyFirstItemName(expectedName: string): Chainable<Subject>;
		verifyProductDetails(
			name: string,
			description: string,
			price: string
		): Chainable<Subject>;
		verifyAddToCartButtonForItem(itemName: string): Chainable<Subject>;
		verifyItemDescription(
			itemName: string,
			description: string
		): Chainable<Subject>;
		verifyItemPrice(itemName: string, price: string): Chainable<Subject>;
		verifyCartIsEmptyAfterRemoval(): Chainable<Subject>;
		verifyItemNotListed(itemName: string): Chainable<Subject>;
		shouldShowErrorMessage(message: string): Chainable<Subject>;
		verifyCheckoutOverviewPage(): Chainable<Subject>;
		verifyOrderConfirmationPage(): Chainable<Subject>;
		verifyCartIsEmptyAfterCancel(): Chainable<Subject>;
		verifyOrderSummary(itemName: string, price: string): Chainable<Subject>;
		verifyEmptyCheckoutForm(): Chainable<Subject>;
		verifyGeneralErrorMessage(message: string): Chainable<Subject>;
		verifyOrderTotal(expectedTotal: string): Chainable<Subject>;
	}
}

Cypress.Commands.add('verifyInventoryPage', () => {
	cy.url().should('include', '/inventory.html');
	cy.contains('.title', 'Products').should('contain', 'Products');
});

Cypress.Commands.add('verifyCartPage', () => {
	cy.url().should('include', '/cart.html');
	cy.contains('.title', 'Your Cart').should('contain', 'Your Cart');
});

Cypress.Commands.add('verifyCheckoutPage', () => {
	cy.url().should('include', '/checkout-step-one.html');
	cy.contains('.title', 'Checkout: Your Information').should(
		'contain',
		'Checkout: Your Information'
	);
});

Cypress.Commands.add('itemNotExistsFromCart', (itemName: string) => {
	cy.get('.removed_cart_item').should('not.contain', itemName);
});

Cypress.Commands.add('itemExistFromCart', (itemName: string) => {
	cy.contains('.cart_item', itemName).should('exist').and('contain', itemName);
});

Cypress.Commands.add('shouldMessageError', (message: string) => {
	cy.get('.error-message-container.error')
		.should('be.visible')
		.and('contain', message);
});

Cypress.Commands.add('shouldCartBadgeCount', (count: number) => {
	cy.get('.shopping_cart_badge').should('be.visible').and('contain', count);
});

Cypress.Commands.add('verifyItemListed', (itemName: string) => {
	cy.contains('.inventory_item_name', itemName).should('exist');
});

Cypress.Commands.add('verifyAddToCartButtonVisible', () => {
	cy.get('.inventory_item button').should('be.visible');
});

Cypress.Commands.add('verifyCartIsEmpty', () => {
	cy.get('.shopping_cart_badge').should('not.exist');
});

Cypress.Commands.add('verifyFirstItemPrice', (expectedPrice: string) => {
	cy.get('.inventory_item_price')
		.first()
		.should('be.visible')
		.then(($el) => {
			console.log('Preço encontrado:', $el.text());
		})
		.and('contain', expectedPrice);
});

Cypress.Commands.add('verifyFirstItemName', (expectedName: string) => {
	cy.get('.inventory_item_name').first().should('contain', expectedName);
});

Cypress.Commands.add(
	'verifyProductDetails',
	(name: string, description: string, price: string) => {
		cy.get('.inventory_details_name').should('contain', name);
		cy.get('.inventory_details_desc').should('contain', description);
		cy.get('.inventory_details_price').should('contain', price);
	}
);

Cypress.Commands.add('verifyAddToCartButtonForItem', (itemName: string) => {
	cy.contains('.inventory_item_name', itemName)
		.parents('.inventory_item')
		.find('[data-test^="add-to-cart-"]')
		.should('be.visible');
});

Cypress.Commands.add(
	'verifyItemDescription',
	(itemName: string, description: string) => {
		cy.contains('.inventory_item_name', itemName)
			.parents('.inventory_item')
			.find('.inventory_item_desc')
			.should('contain', description);
	}
);

Cypress.Commands.add('verifyItemPrice', (itemName: string, price: string) => {
	cy.contains('.inventory_item_name', itemName)
		.parents('.inventory_item')
		.find('.inventory_item_price')
		.should('be.visible')
		.and('contain', price);
});

Cypress.Commands.add('verifyCartIsEmptyAfterRemoval', () => {
	cy.get('.cart_item').should('not.exist');
	cy.get('.shopping_cart_badge').should('not.exist');
});

Cypress.Commands.add('verifyItemNotListed', (itemName: string) => {
	cy.contains('.inventory_item_name', itemName).should('not.exist');
});

Cypress.Commands.add('shouldShowErrorMessage', (message: string) => {
	cy.get('.error-message-container.error')
		.should('be.visible')
		.and('contain', message);
});

Cypress.Commands.add('verifyCheckoutOverviewPage', () => {
	cy.url().should('include', '/checkout-step-two.html');
	cy.contains('.title', 'Checkout: Overview').should('be.visible');
});

Cypress.Commands.add('verifyOrderConfirmationPage', () => {
	cy.url().should('include', '/checkout-complete.html');
	cy.contains('.title', 'Checkout: Complete!').should('be.visible');
	cy.contains('.complete-header', 'Thank you for your order!').should(
		'be.visible'
	);
});

Cypress.Commands.add('verifyCartIsEmptyAfterCancel', () => {
	cy.get('.cart_item').should('not.exist');
	cy.get('.shopping_cart_badge').should('not.exist');
});

Cypress.Commands.add(
	'verifyOrderSummary',
	(itemName: string, price: string) => {
		cy.contains('.cart_item', itemName)
			.should('exist')
			.and('contain', itemName)
			.and('contain', price);
		cy.get('.summary_total_label').should('be.visible').and('contain', 'Total');
	}
);

Cypress.Commands.add('verifyEmptyCheckoutForm', () => {
	cy.get('#first-name').should('have.value', '');
	cy.get('#last-name').should('have.value', '');
	cy.get('#postal-code').should('have.value', '');
});

Cypress.Commands.add('verifyGeneralErrorMessage', (message: string) => {
	cy.get('.error-message-container')
		.should('be.visible')
		.and('contain', message);
});

Cypress.Commands.add('verifyOrderTotal', (expectedTotal: string) => {
	cy.get('.summary_total_label')
		.should('be.visible')
		.and('contain', expectedTotal);
});
