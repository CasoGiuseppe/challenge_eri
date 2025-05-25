import type { INavigation } from '@components/elements/sidebar-menu/types'

export const DEFAULT_NAVIGATION: INavigation[] = [
  {
    id: '1',
    label: 'Administration',
    icon: 'iconAdministration',
    to: { name: 'root' },
  },
  {
    id: '2',
    label: 'Customer',
    icon: 'iconCustomer',
    to: { name: 'root' },
  },
  {
    id: '3',
    label: 'Folder',
    icon: 'iconFolder',
    to: { name: 'root' },
  },
]
