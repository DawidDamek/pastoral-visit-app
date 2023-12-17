Cypress.Commands.add('logToConsole', (message) => {
  cy.task('log', message);
});
