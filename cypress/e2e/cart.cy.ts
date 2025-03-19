describe('Cart', () => {
	let users: any;
	let products: any;

	beforeEach(() => {
		cy.fixture('users').then((data) => {
			users = data;
		});
		cy.fixture('products').then((data) => {
			products = data.products;
		});

		cy.visit('/');
		cy.fixture('users').then((users: any) => {
			const user = users.validUser;
			cy.fillFieldsLogin(user.username, user.password);
			cy.loginButton();
			cy.verifyInventoryPage();
		});
	});

	context('Add Items to Cart', () => {
		it('should add an item to the cart', () => {
			const itemName = products[0].name;
			cy.addToCartButton(itemName);
			cy.shouldCartBadgeCount(1);
		});

		it('Should add multiple items to the cart and verify them', () => {
			const product1 = products[0];
			const product2 = products[1];
			cy.addToCartButton(product1.name);
			cy.addToCartButton(product2.name);
			cy.shouldCartBadgeCount(2);
			cy.cartButton();
			cy.verifyCartPage();
			cy.itemExistFromCart(product1.name);
			cy.itemExistFromCart(product2.name);
		});
	});

	context('Remove Items from Cart', () => {
		it('should remove an item from the cart', () => {
			const itemName = products[0].name;
			cy.addToCartButton(itemName);
			cy.cartButton();
			cy.verifyCartPage();
			cy.removeFromCartButton();
			cy.itemNotExistsFromCart(itemName);
		});

		it('Should remove all items from the cart and verify it is empty', () => {
			products.forEach((product) => {
				cy.addToCartButton(product.name);
			});
			cy.shouldCartBadgeCount(products.length);
			cy.cartButton();
			cy.verifyCartPage();
			products.forEach((product) => {
				cy.removeSpecificItemFromCart(product.name);
			});
			cy.verifyCartIsEmptyAfterRemoval();
		});
	});

	context('Checkout Operations', () => {
		it('should proceed to checkout', () => {
			const itemName = products[0].name;
			cy.addToCartButton(itemName);
			cy.cartButton();
			cy.verifyCartPage();
			cy.itemExistFromCart(itemName);
			cy.checkoutButton();
			cy.verifyCheckoutPage();
		});
	});
});
