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
    label: 'Date of last movement',
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
        action: () => console.log('this is row 1'),
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
        action: () => {
          console.log('this is row 2')
        },
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
        action: () => console.log('this is row 3'),
      },
    ],
  },
]
