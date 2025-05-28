import * as esCustomer from '@modules/customer/presentation/translations/locales/es'
import * as esAccount from '@/modules/account/presentation/translations/locales/es'
import * as esMocks from '@app/translations/__mocks__/es'

export const es = {
  WELCOME: {
    message: 'Bienvenido a Eri Bancaire',
    link: 'Ir a la aplicación',
  },
  NAVIGATION: {
    items: {
      administration: 'Administración',
      customers: 'Clientes',
      accounts: 'Cuentas',
    },
  },

  ...esCustomer.default,
  ...esAccount.default,
  ...esMocks.default,
}
