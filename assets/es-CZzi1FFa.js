const es$3 = {
  CUSTOMER: {
    client: "Cliente { id } - { name }",
    labels: {
      details: "Datos del cliente"
    }
  }
};

const es$2 = {
  ACCOUNT: {
    account: "Cuenta { id }",
    labels: {
      characteristic: "Característica de la cuenta { chr }"
    }
  }
};

const es$1 = {
  MOCKS: {
    panels: {
      client: "contenido de información del cliente",
      general: "Información de la pestaña General",
      communication: "Información de la pestaña Comunicación",
      statistics: "Información de la pestaña Estadísticas",
      managements: "Información de la pestaña de Gestión",
      listAccount: "List of accounts: { account }"
    },
    areas: {
      general: "General",
      communication: "Comunicación",
      statistics: "Estadística",
      managements: "Gestiones"
    },
    tables: {
      account: "Cuenta",
      currency: "Abreviatura de moneda",
      category: "Categoría",
      description: "Descripción del artículo",
      status: "Estado"
    }
  }
};

const es = {
  WELCOME: {
    message: "Bienvenido a Eri Bancaire",
    link: "Ir a la aplicación"
  },
  NAVIGATION: {
    items: {
      administration: "Administración",
      customers: "Clientes",
      accounts: "Cuentas"
    }
  },
  ...es$3,
  ...es$2,
  ...es$1
};

export { es as default };
