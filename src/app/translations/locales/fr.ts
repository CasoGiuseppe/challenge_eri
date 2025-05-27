import * as frCustomer from '@modules/customer/presentation/translations/locales/fr.json'
import * as frMocks from '@app/translations/__mocks__/fr.json'

export const fr = {
  NAVIGATION: {
    items: {
      administration: 'Administration',
      customers: 'Clients',
      accounts: 'Comptes',
    },
  },

  ...frCustomer,
  ...frMocks,
}
