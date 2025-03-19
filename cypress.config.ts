import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    baseUrl: "https://www.saucedemo.com",
    screenshotOnRunFailure: true,
    video : true,
  },
})