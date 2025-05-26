import type { IGlobalNavigation } from '@/app/shared/stores/configuration/navigation/interfaces'

export const DEFAULT_NAVIGATION: IGlobalNavigation[] = [
  {
    id: '1',
    translation: 'Administration',
    icon: 'iconAdministration',
    to: { name: 'root' },
  },
  {
    id: '2',
    translation: 'Customer',
    icon: 'iconCustomer',
    to: { name: 'root' },
  },
  {
    id: '3',
    translation: 'Folder',
    icon: 'iconFolder',
    to: { name: 'root' },
  },
]
