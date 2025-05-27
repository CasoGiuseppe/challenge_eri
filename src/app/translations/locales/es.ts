import * as esCustomer from '@modules/customer/presentation/translations/locales/es.json'
import * as esMocks from '@app/translations/__mocks__/es.json'

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

  ...esCustomer,
  ...esMocks,
}
