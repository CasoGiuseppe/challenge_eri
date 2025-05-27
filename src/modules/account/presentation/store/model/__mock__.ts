import type { IMainAccount } from '../interfaces'

export const accountData: IMainAccount = {
  data: {
    id: '015454156 909/9782034',
    characteristic: '807-0000000000000',
  },
  table: {
    head: [
      {
        id: 'acc',
        translation: 'account',
      },
      {
        id: 'cr',
        translation: 'currency',
      },
      {
        id: 'ctr',
        translation: 'category',
      },
      {
        id: 'desc',
        translation: 'description',
      },
      {
        id: 'stt',
        translation: 'status',
      },
    ],
    body: [
      {
        row: [
          {
            id: '1',
            label: '41985151551562121',
          },
          {
            id: '2',
            label: '0000',
          },
          {
            id: '3',
            label: '001- Current account',
          },
          {
            id: '4',
            label: 'Compte courant',
          },
          {
            id: '5',
            label: '00000',
            state: 'active',
          },
        ],
      },
      {
        row: [
          {
            id: '1',
            label: '41985142342341562121',
          },
          {
            id: '2',
            label: '0001',
          },
          {
            id: '3',
            label: '002- Current account',
          },
          {
            id: '4',
            label: 'Compte courant',
          },
          {
            id: '5',
            label: '00001',
            state: 'inactive',
          },
        ],
      },
      {
        row: [
          {
            id: '1',
            label: '4198523232341562121',
          },
          {
            id: '2',
            label: '0002',
          },
          {
            id: '3',
            label: '003- Current account',
          },
          {
            id: '4',
            label: 'Compte courant',
          },
          {
            id: '5',
            label: '00002',
            state: 'inactive',
          },
        ],
      },
    ],
  },
}
