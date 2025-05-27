import type { IMainNavigation } from '../interfaces'

export const globalNavigation: IMainNavigation = {
  items: [
    {
      id: 'adm',
      translation: 'administration',
      icon: 'iconAdministration',
      to: { name: 'Admin' },
    },
    {
      id: 'cst',
      translation: 'customers',
      icon: 'iconCustomer',
      to: { name: 'Customers' },
    },
    {
      id: 'acc',
      translation: 'accounts',
      icon: 'iconFolder',
      to: { name: 'Accounts' },
    },
  ],
}
