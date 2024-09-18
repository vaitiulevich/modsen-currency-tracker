describe('ConversionModal Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should open and display conversion modal', () => {
    cy.get('[data-testid="value-panel-container"]').first().click();

    cy.get('#modal-root').should('exist');
    cy.get('h2').contains('Currency Exchange');
    cy.get('p').contains('From:').should('exist');
    cy.get('select').should('exist');
    cy.get('#amount').should('exist').clear().type('100');
    cy.get('#amount').should('have.value', '100');
    cy.get('button').contains('Exchange').should('exist');
    cy.get('button').contains('Close').should('exist');
  });

  it('should validate input amount and show error', () => {
    cy.get('[data-testid="value-panel-container"]').first().click();
    cy.get('#amount').clear().type('0');
    cy.get('button').contains('Exchange').should('be.disabled');
  });

  it('should close the modal', () => {
    cy.get('[data-testid="value-panel-container"]').first().click();
    cy.get('button').contains('Close').click();

    cy.get('#modal-root').should('have.text', '').and('have.html', '');
  });
});
