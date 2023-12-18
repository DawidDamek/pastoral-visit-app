describe('checks adding order', () => {
  it('login without UI and visit panel', () => {
    cy.authenticate();

    cy.visit('/order');
    cy.url().should('eq', 'http://localhost:4200/order');

    cy.get('[data-test-input="0"]').type('A');
    cy.get('[data-test-error="0"]').should(
      'have.text',
      'Name is too short (minimum is 4 characters)'
    );
    cy.get('[data-test-input="0"]').type('dam');
    cy.get('[data-test-error="0"]').should('not.exist');
    cy.get('[data-test-input="1"]').type('Nazwisko');
    cy.get('[data-test-input="2"]').type('43-300');
    cy.get('[data-test-input="3"]').type('Bielsko');
    cy.get('[data-test-input="4"]').type('123456789');
    cy.get('[data-test-input="5"]').type('pokątna');
    cy.get('[data-test-input="6"]').type(3);
    cy.get('[data-test-input="7"]').type(6);
    cy.get('[data-test-input="8"]').type(14);
    cy.get('[data-test-input="9"]').type('2024-01-01');
    cy.contains('Save').click();

    cy.url().should('eq', 'http://localhost:4200/panel/requests');
    cy.get('.card').should('have.length', 4);
    cy.get('[data-test-card-name="0"]').should('have.text', 'Adam');
    cy.get('[data-test-card-surname="0"]').should('have.text', 'Nazwisko');
  });
});
