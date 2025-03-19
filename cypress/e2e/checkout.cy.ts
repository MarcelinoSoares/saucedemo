describe('Checkout', () => {
	let personas: any;

	beforeEach(() => {
		cy.fixture('personas').then((data) => {
			personas = data;
		});

		cy.visit('/');
		cy.fixture('personas').then((personas: any) => {
			const user = personas.validUser;
			cy.fillFieldsLogin(user.username, user.password);
			cy.loginButton();
			cy.verifyInventoryPage();
			cy.addToCartButton('Sauce Labs Backpack');
			cy.cartButton();
			cy.verifyCartPage();
			cy.checkoutButton();
		});
	});

	context('Valid Form Submission', () => {
		it('should proceed to the next step with valid inputs', () => {
			const user = personas.validUser;
			cy.fillCheckoutForm(user.firstname, user.lastname, user.zipcode);
			cy.continueButton();
			cy.verifyCheckoutOverviewPage();
		});
	});

	context('Required Fields', () => {
		it('should show error messages when fields are empty', () => {
			cy.continueButton();
			cy.shouldShowErrorMessage('Error: First Name is required');
		});

		it('should show error message when last name is missing', () => {
			const user = personas.validUser;
			cy.fillCheckoutForm(user.firstname, '', user.zipcode);
			cy.continueButton();
			cy.shouldShowErrorMessage('Error: Last Name is required');
		});

		it('should show error message when ZIP code is missing', () => {
			const user = personas.validUser;
			cy.fillCheckoutForm(user.firstname, user.lastname, '');
			cy.continueButton();
			cy.shouldShowErrorMessage('Error: Postal Code is required');
		});
	});

	context('Field Format Validation', () => {
		it.skip('should show error for invalid characters in first name', () => {
			cy.fillCheckoutForm('12345', 'Doe', '12345');
			cy.continueButton();
			cy.shouldShowErrorMessage('Error: Invalid first name');
		});

		it.skip('should show error for invalid characters in last name', () => {
			cy.fillCheckoutForm('John', '@Doe!', '12345');
			cy.continueButton();
			cy.shouldShowErrorMessage('Error: Invalid last name');
		});

		it.skip('should show error for letters in ZIP code', () => {
			cy.fillCheckoutForm('John', 'Doe', 'ABCDE');
			cy.continueButton();
			cy.shouldShowErrorMessage('Error: Invalid postal code');
		});
	});

	context('Cancel Button', () => {
		it('should return to the cart page when clicking "Cancel"', () => {
			cy.cancelButton();
			cy.verifyCartPage();
		});
	});

	context('Order Completion', () => {
		it('should complete the order successfully', () => {
			const user = personas.validUser;
			cy.fillCheckoutForm(user.firstname, user.lastname, user.zipcode);
			cy.continueButton();
			cy.verifyCheckoutOverviewPage();
			cy.finishCheckoutButton();
			cy.verifyOrderConfirmationPage();
		});
	});

	context('Order Summary', () => {
		it('should display correct item and total price in the summary', () => {
			const itemName = 'Sauce Labs Backpack';
			const price = '$29.99';
			const user = personas.validUser;
			cy.fillCheckoutForm(user.firstname, user.lastname, user.zipcode);
			cy.continueButton();
			cy.verifyOrderSummary(itemName, price);
		});
	});
});
