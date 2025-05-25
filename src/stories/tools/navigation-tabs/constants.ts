import type { ITab } from '@components/tools/navigation-tabs/types'

export const DEFAULT_TABS: ITab[] = [
  {
    id: '1',
    label: 'tab 1',
    to: { name: 'root' },
  },
  {
    id: '2',
    label: 'tab 2',
    to: { name: 'root' },
  },
]
