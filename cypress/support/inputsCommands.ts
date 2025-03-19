declare namespace Cypress {
	interface Chainable {
		fillFieldsLogin(username: string, password: string): Chainable<void>;
		fillCheckoutForm(
			firstName: string,
			lastName: string,
			postalCode: string
		): Chainable<void>;
		selectProductSort(sortOption: string): Chainable<void>;
		searchProduct(productName: string): Chainable<void>;
	}
}

Cypress.Commands.add(
	'fillFieldsLogin',
	(username: string, password: string) => {
		if (username) {
			cy.get('#user-name').type(username);
		}
		if (password) {
			cy.get('#password').type(password);
		}
	}
);

Cypress.Commands.add('selectProductSort', (sortOption: string) => {
	cy.get('.product_sort_container').select(sortOption);
});

Cypress.Commands.add('searchProduct', (productName: string) => {
	cy.get('.inventory_item_name').contains(productName).should('exist');
});

Cypress.Commands.add(
	'fillCheckoutForm',
	(firstName: string, lastName: string, postalCode: string) => {
		if (firstName) {
			cy.get('#first-name').type(firstName);
		}
		if (lastName) {
			cy.get('#last-name').type(lastName);
		}
		if (postalCode) {
			cy.get('#postal-code').type(postalCode);
		}
	}
);
