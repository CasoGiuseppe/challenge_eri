import type { ICell, IRow } from '@components/elements/table-list/types'

export const DEFAULT_HEAD: ICell[] = [
  {
    id: '1',
    label: 'Account',
  },
  {
    id: '2',
    label: 'Currency abbreviation',
  },
  {
    id: '3',
    label: 'Category',
  },
  {
    id: '4',
    label: 'Item description',
  },
  {
    id: '5',
    label: 'Status',
  },
]

export const DEFAULT_BODY: IRow[] = [
  {
    row: [
      {
        id: '1',
        label: 'Body',
      },
      {
        id: '2',
        label: 'Body',
      },
      {
        id: '3',
        label: 'Body',
      },
      {
        id: '4',
        label: 'Body',
      },
      {
        id: '5',
        label: 'Body',
        state: 'active',
      },
    ],
  },
  {
    row: [
      {
        id: '1',
        label: 'Body',
      },
      {
        id: '2',
        label: 'Body',
      },
      {
        id: '3',
        label: 'Body',
      },
      {
        id: '4',
        label: 'Body',
      },
      {
        id: '5',
        label: 'Body',
        state: 'inactive',
      },
    ],
  },
  {
    row: [
      {
        id: '1',
        label: 'Body',
      },
      {
        id: '2',
        label: 'Body',
      },
      {
        id: '3',
        label: 'Body',
      },
      {
        id: '4',
        label: 'Body',
      },
      {
        id: '5',
        label: 'Body',
        state: 'active',
      },
    ],
  },
]
