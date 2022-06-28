const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dashboard.focaldata.dev',
    specPattern: "e2e/**/*.{feature,features,spec.js}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber())
    },
  },
});
