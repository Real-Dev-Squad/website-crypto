describe('visiting /dashboard', () => {
  before(() => {
    cy.visit('/dashboard');
  });

  it('checks if url is pointing to dashboard route', () => {
    cy.location('pathname').should('eq', '/dashboard');
  });

  it('checks if sidebar is rendered', () => {
    cy.get('[data-testid="sidebar-notification"]').should('exist');
  });

  it('checks if breadcrumbs are rendered', () => {
    cy.get('[data-testid="breadcrumbs"]').should('exist');

    cy.get('[data-testid="breadcrumbs"]')
      .find('a')
      .eq(0)
      .should('have.text', 'home');
    cy.get('[data-testid="breadcrumbs"]').find('a').eq(0).click();
    cy.location('pathname').should('eq', '/');

    cy.go('back');

    cy.get('[data-testid="breadcrumbs"]')
      .find('a')
      .eq(1)
      .should('have.text', 'dashboard');
  });

  it('checks if wallets section is rendered', () => {
    cy.get('[data-testid="wallets"]').should('exist');
    cy.get('[data-testid="wallets"] h3').first().should('have.text', 'Wallets');
  });

  it('checks if rds transaction graph is visible', () => {
    cy.get('h2').contains('RDS Transaction').should('exist');
    cy.get('[data-testid="transaction-chart"]').should('exist');
  });

  it('checks if profile sidebar is rendered', () => {
    cy.get('[data-testid="profile-sidebar"]').should('exist');
  });
});
