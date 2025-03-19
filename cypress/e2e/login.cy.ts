describe('Login', () => {
	let usersData;

	beforeEach(() => {
		cy.visit('/');
		cy.fixture('users.json').then((users) => {
			usersData = users;
		});
	});

	// Contexto: Login bem-sucedido
	context('Successful Login', () => {
		it('should login with valid credentials', () => {
			const user = usersData.validUser;

			cy.fillFieldsLogin(user.username, user.password);
			cy.loginButton();
			cy.verifyInventoryPage();
		});
	});

	// Contexto: Erros de credenciais
	context('Credential Errors', () => {
		it('should show an error with invalid credentials', () => {
			const user = usersData.invalidUser;

			cy.fillFieldsLogin(user.username, user.password);
			cy.loginButton();
			cy.shouldMessageError(
				'Username and password do not match any user in this service'
			);
		});

		it('should show an error with invalid password', () => {
			const user = usersData.invalidPassword;

			cy.fillFieldsLogin(user.username, user.password);
			cy.loginButton();
			cy.shouldMessageError(
				'Username and password do not match any user in this service'
			);
		});

		it('should show an error with invalid username', () => {
			const user = usersData.invalidUsername;

			cy.fillFieldsLogin(user.username, user.password);
			cy.loginButton();
			cy.shouldMessageError(
				'Username and password do not match any user in this service'
			);
		});
	});

	// Contexto: Campos vazios
	context('Empty Fields', () => {
		it('should show an error with empty fields', () => {
			cy.loginButton();
			cy.shouldMessageError('Username is required');
		});

		it('should show an error with empty password', () => {
			const user = usersData.emptyPassword;

			cy.fillFieldsLogin(user.username, user.password);
			cy.loginButton();
			cy.shouldMessageError('Password is required');
		});

		it('should show an error with empty username', () => {
			const user = usersData.emptyUsername;

			cy.fillFieldsLogin(user.username, user.password);
			cy.loginButton();
			cy.shouldMessageError('Username is required');
		});
	});
});
