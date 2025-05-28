import * as enCustomer from '@modules/customer/presentation/translations/locales/en'
import * as enAccount from '@modules/account/presentation/translations/locales/en'
import * as enMocks from '@app/translations/__mocks__/en'

const en = {
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
  ...enCustomer.default,
  ...enAccount.default,
  ...enMocks.default,
}

export default en
