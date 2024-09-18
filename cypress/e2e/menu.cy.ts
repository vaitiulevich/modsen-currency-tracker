describe('Menu Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should navigate to Home section', () => {
    cy.get('a').contains('Home').click();
    cy.url().should('include', '#');
  });

  it('should navigate to Timeline section', () => {
    cy.get('a').contains('Timeline').click();
    cy.url().should('include', '#timeline');
  });

  it('should navigate to Bank card section', () => {
    cy.get('a').contains('Bank card').click();
    cy.url().should('include', '#bank-card');
  });

  it('should navigate to Contact section', () => {
    cy.get('a').contains('Contact').click();
    cy.url().should('include', '#contact');
  });
});
