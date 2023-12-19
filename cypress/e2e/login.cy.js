describe('checks login', () => {
  it('login in to the application', () => {
    cy.visit('/');
    cy.contains('Panel główny').click();
    cy.get('input[type="email"]').type('john.doe@example.com');
    cy.get('input[type="password"]').type('password123');
    cy.intercept('POST', 'http://localhost:3000/users/sign_in').as('signIn');
    cy.contains('Sign in').click();

    cy.wait('@signIn').then((interception) => {
      cy.logToConsole(interception);
      cy.logToConsole(interception.response);
    });

    cy.url().should('eq', 'http://localhost:4200/panel');
  });

  it('enters wrong login credentials', () => {
    cy.visit('/');
    cy.contains('Panel główny').click();
    cy.get('input[type="email"]').type('wrong@email.com');
    cy.get('input[type="password"]').type('wrongPassword');
    cy.contains('Sign in').click();
    cy.get('.text-danger').should('have.text', 'Unauthorized');
    cy.url().should('eq', 'http://localhost:4200/login');
  });

  it('login without UI and visit panel', () => {
    cy.authenticate();

    cy.visit('/panel/requests');
    cy.url().should('eq', 'http://localhost:4200/panel/requests');
    cy.get('.card').should('have.length', 3);
  });
});
