describe('FinancialChart Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('a').contains('Timeline').click();
  });

  it('should render the currency selector and financial chart', () => {
    cy.get('select').should('exist');
    cy.get('canvas').should('exist');
  });
});
