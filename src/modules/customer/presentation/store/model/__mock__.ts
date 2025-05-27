import type { IMainCustomer } from '../interfaces'

export const customerData: IMainCustomer = {
  data: {
    id: '12345678',
    name: 'Giuseppe',
    surname: 'Caso',
  },
  areas: [
    {
      id: 'gnr',
      translation: 'general',
      to: { name: 'General' },
    },
    {
      id: 'cmm',
      translation: 'communication',
      to: { name: 'Communication' },
    },
    {
      id: 'stt',
      translation: 'statistics',
      to: { name: 'Statistic' },
    },
    {
      id: 'mnn',
      translation: 'managements',
      to: { name: 'Management' },
    },
  ],
}
