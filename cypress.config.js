/* eslint-disable no-undef */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  video: false,

  e2e: {
    baseUrl: 'http://localhost:4200',
  },
});
