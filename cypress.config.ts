import { defineConfig } from 'cypress';
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			allureWriter(on, config);
			return config;
		},
		// Configure your E2E tests here
		specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
		baseUrl: 'https://www.saucedemo.com',
		screenshotOnRunFailure: true,
		video: true,
	},
});