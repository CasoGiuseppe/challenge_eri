import type { IArea } from '@modules/customer/presentation/store/interfaces'

export const DEFAULT_TABS: IArea[] = [
  {
    id: '1',
    translation: 'tab 1',
    to: { name: 'root' },
  },
  {
    id: '2',
    translation: 'tab 2',
    to: { name: 'root' },
  },
]
