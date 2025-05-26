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
      id: 'fld',
      translation: 'folders',
      icon: 'iconFolder',
      to: { name: 'Folders' },
    },
  ],
}
