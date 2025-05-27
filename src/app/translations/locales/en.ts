import * as enCustomer from '@modules/customer/presentation/translations/locales/en.json'
import * as enMocks from '@app/translations/__mocks__/en.json'

export const en = {
  WELCOME: {
    message: 'Welcome to Eri Bancaire',
    link: 'Go to app',
  },
  NAVIGATION: {
    items: {
      administration: 'Administration',
      customers: 'Customers',
      accounts: 'Accounts',
    },
  },
  ...enCustomer,
  ...enMocks,
}
