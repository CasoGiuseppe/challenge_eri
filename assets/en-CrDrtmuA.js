const en$3 = {
  CUSTOMER: {
    client: "Client { id } - { name }",
    labels: {
      details: "Client details"
    }
  }
};

const en$2 = {
  ACCOUNT: {
    account: "Account { id }",
    labels: {
      characteristic: "Account characteristic { chr }"
    }
  }
};

const en$1 = {
  MOCKS: {
    panels: {
      client: "client info content",
      general: "General Tab Info",
      communication: "Communication Tab Info",
      statistics: "Statistic Tab Info",
      managements: "Management Tab Info",
      listAccount: "List of accounts: { account }"
    },
    areas: {
      general: "General",
      communication: "Communication",
      statistics: "Statistics",
      managements: "Procedures"
    },
    tables: {
      account: "Account",
      currency: "Currency abbreviation",
      category: "Category",
      description: "Item description",
      status: "Status"
    }
  }
};

const en = {
  WELCOME: {
    message: "Welcome to Eri Bancaire",
    link: "Go to app"
  },
  NAVIGATION: {
    items: {
      administration: "Administration",
      customers: "Customers",
      accounts: "Accounts"
    }
  },
  ...en$3,
  ...en$2,
  ...en$1
};

export { en as default };
