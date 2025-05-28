const fr$3 = {
  CUSTOMER: {
    client: "Client { id } - { name }",
    labels: {
      details: "Détails du client"
    }
  }
};

const fr$2 = {
  ACCOUNT: {
    account: "Compte { id }",
    labels: {
      characteristic: "Caractéristiques du compte { chr }"
    }
  }
};

const fr$1 = {
  MOCKS: {
    panels: {
      client: "contenu des informations client",
      general: "Informations générales sur l'onglet",
      communication: "Informations sur l'onglet Communication",
      statistics: "Informations sur l'onglet Statistiques",
      managements: "Informations sur l'onglet Gestion",
      listAccount: "List of accounts: { account }"
    },
    areas: {
      general: "General",
      communication: "Communication",
      statistics: "Statistiques",
      managements: "Procédures"
    },
    tables: {
      account: "Compte",
      currency: "Abréviation de devise",
      category: "Catégorie",
      description: "Description de l'article",
      status: "Statut"
    }
  }
};

const fr = {
  WELCOME: {
    message: "Bienvenue chez Eri Bancaire",
    link: "Accéder à l'application"
  },
  NAVIGATION: {
    items: {
      administration: "Administration",
      customers: "Clients",
      accounts: "Comptes"
    }
  },
  ...fr$3,
  ...fr$2,
  ...fr$1
};

export { fr as default };
