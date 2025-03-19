describe('Products', () => {
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

	context('Product Sorting', () => {
		it('Should sort products correctly', () => {
			const lowestPrice = products[4].price;
			const firstItemName = products[0].name;

			cy.selectProductSort('Price (low to high)');
			cy.verifyFirstItemPrice(lowestPrice);

			cy.selectProductSort('Name (A to Z)');
			cy.verifyFirstItemName(firstItemName);
		});
	});

	context('Product Details', () => {
		it('Should display product details correctly', () => {
			const itemName = products[1].name;
			const description = products[1].description;
			const price = products[1].price;

			cy.searchProduct(itemName);
			cy.clickOnInventoryItem(itemName);
			cy.verifyProductDetails(itemName, description, price);

			cy.backToProductsButton();
			cy.verifyInventoryPage();
		});
	});

	context('Product Validation', () => {
		it('Should verify all product prices on the inventory page', () => {
			products.forEach((product) => {
				cy.verifyItemPrice(product.name, product.price);
			});
		});

		it('Should verify all product descriptions on the inventory page', () => {
			products.forEach((product) => {
				cy.verifyItemDescription(product.name, product.description);
			});
		});
	});
});
