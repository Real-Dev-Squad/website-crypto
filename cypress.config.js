const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3443',
    specPattern: '__tests__/integration/**/*.spec.js',
    supportFile: '__tests__/support/e2e.js',
  },
});
