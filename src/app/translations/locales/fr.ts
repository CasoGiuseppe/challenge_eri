import * as frCustomer from '@modules/customer/presentation/translations/locales/fr.json'
import * as frAccount from '@modules/account/presentation/translations/locales/fr.json'
import * as frMocks from '@app/translations/__mocks__/fr.json'

export const fr = {
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

  ...frCustomer,
  ...frAccount,
  ...frMocks,
}
