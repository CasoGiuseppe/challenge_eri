import * as frCustomer from '@modules/customer/presentation/translations/locales/fr'
import * as frAccount from '@/modules/account/presentation/translations/locales/fr'
import * as frMocks from '@/app/translations/__mocks__/fr'

const fr = {
  WELCOME: {
    message: 'Bienvenue chez Eri Bancaire',
    link: "Accéder à l'application",
  },
  NAVIGATION: {
    items: {
      administration: 'Administration',
      customers: 'Clients',
      accounts: 'Comptes',
    },
  },

  ...frCustomer.default,
  ...frAccount.default,
  ...frMocks.default,
}

export default fr
