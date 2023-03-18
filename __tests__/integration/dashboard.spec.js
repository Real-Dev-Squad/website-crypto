describe('visiting /dashboard', () => {
  before(() => {
    cy.visit('/dashboard');
  });

  it('checks if url is pointing to dashboard route', () => {
    cy.location('pathname').should('eq', '/dashboard');
  });

  it('checks if sidebar is rendered', () => {
    const sidebarMenuOptions = [
      {
        name: 'Home',
        iconPath: '/assets/Home.svg',
        urlPath: '/',
      },
      {
        name: 'Dashboard',
        iconPath: '/assets/Dashboard.svg',
        urlPath: 'dashboard',
      },
      {
        name: 'Currency Exchange',
        iconPath: '/assets/Swap.svg',
        urlPath: 'currency-exchange',
      },
      {
        name: 'Auction',
        iconPath: '/assets/Auction.svg',
        urlPath: 'auction',
      },
      {
        name: 'Stocks',
        iconPath: '/assets/Stocks.svg',
        urlPath: 'trading',
      },
      {
        name: 'Balance',
        iconPath: '/assets/Balance.svg',
        urlPath: 'wallet',
      },
    ];

    cy.get('[data-testid="sidebar-logo"]').should('exist');
    cy.get('[data-testid="sidebar-title"]').should('have.text', 'RealDevSquad');

    sidebarMenuOptions.forEach((option) => {
      cy.get(`[data-testid="sidebar-menu-icon=${option.iconPath}"]`).should(
        'exist'
      );
      cy.get(`[data-testid="sidebar-menu-title-${option.name}"]`).should(
        'have.text',
        option.name
      );
    });

    cy.get('[data-testid="sidebar-trade-button"]').should(
      'have.text',
      'Trade Now'
    );
    cy.get('[data-testid="sidebar-trade-button-icon"]').should('exist');
    cy.get('[data-testid="sidebar-guide-button"]').should('exist');
    cy.get('[data-testid="sidebar-guide-button-icon"]').should('exist');
  });

  it('checks if breadcrumbs are rendered', () => {
    const links = ['home', 'dashboard'];

    cy.get('[data-testid="breadcrumbs-separator"]').should('exist');

    links.forEach((link) => {
      cy.get(`[data-testid="breadcrumbs-link-${link}"]`).should(
        'have.text',
        link
      );
    });
  });

  it('checks if wallets section is rendered', () => {
    const currencyData = [
      {
        name: 'Gold',
        value: 110,
        color: ' #f39c12',
        borderColor: '#A58F20',
      },
      {
        name: 'Silver',
        value: 120,
        color: ' #bdc3c7',
        borderColor: '#7F7F7F',
      },
      {
        name: 'Brass',
        value: 150,
        color: '#e67e22',
        borderColor: '#885A01',
      },
    ];

    cy.get('[data-testid="wallets-title"]').should('have.text', 'Wallets');
    cy.get('[data-testid="wallets-more-assets-btn"]').should(
      'have.text',
      'More Assets →'
    );
    cy.get(`[data-testid="wallets-add-currency-btn"]`).should(
      'have.text',
      '+ Add Currency'
    );

    currencyData.forEach((currency) => {
      cy.get(`[data-testid="currency-card-name-${currency.name}"]`).should(
        'have.text',
        currency.name
      );
      cy.get(`[data-testid="currency-card-value-${currency.value}"]`).should(
        'have.text',
        currency.value
      );
    });
  });

  it('checks if rds transaction graph is visible', () => {
    const monthsList = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'Sepetember',
      'October',
      'November',
      'December',
    ];

    cy.get('[data-testid="trasaction-title"]').should(
      'have.text',
      'RDS Transaction'
    );
    cy.get('[data-testid="latest-transaction-btn"]').should(
      'have.text',
      'Latest Transaction'
    );
    cy.get('[data-testid="transaction-select-month"]').should('exist');
    cy.get('[data-testid="transaction-chart"]').should('exist');

    monthsList.forEach((month) => {
      cy.get(`[data-testid="transaction-select-month-${month}"]`).should(
        'have.text',
        month
      );
    });
  });

  it('checks if profile sidebar is rendered', () => {
    const personData = {
      name: 'Ankush Dharkar',
      email: 'some.gmail.com',
      joined: '23 August, 2022',
      type: 'Active',
      coins: {
        brass: 200,
        gold: 100,
        silver: 300,
      },
    };

    cy.get('[data-testid="profile-sidebar-img"]').should('exist');
    cy.get('[data-testid="profile-sidebar-name"]').should(
      'have.text',
      personData.name
    );
    cy.get('[data-testid="profile-sidebar-email"]').should(
      'have.text',
      personData.email
    );
    cy.get('[data-testid="profile-sidebar-account-title"]').should(
      'have.text',
      'Account'
    );
    cy.get('[data-testid="profile-sidebar-joined-title"]').should(
      'have.text',
      'Joined'
    );
    cy.get('[data-testid="profile-sidebar-joined-detail"]').should(
      'have.text',
      personData.joined
    );
    cy.get('[data-testid="profile-sidebar-assets-title"]').should(
      'have.text',
      'Assets'
    );
    cy.get('[data-testid="profile-sidebar-more-asset-btn"]').should(
      'have.text',
      'More Assets...'
    );

    for (let coin in personData.coins) {
      cy.get(`[data-testid=profile-sidebar-asset-${coin}]`).should(
        'have.text',
        coin
      );
      cy.get(
        `[data-testid=profile-sidebar-asset-${personData.coins[coin]}]`
      ).should('have.text', personData.coins[coin]);
    }
  });
});
