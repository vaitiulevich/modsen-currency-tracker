interface Bank {
  name: string;
  coordinates: [number, number];
  currency: string[];
  address: string;
  timeWork: string;
}
export const allBanks: Bank[] = [
  {
    name: 'Приорбанк',
    coordinates: [27.594, 53.936],
    currency: ['USD', 'CAD'],
    address: 'ул.Центральная 17',
    timeWork: '10:00-19:00',
  },
  {
    name: 'Приорбанк',
    coordinates: [27.492, 53.906],
    currency: ['AUD', 'ARS', 'JPY'],
    address: 'ул.Центральная 17',
    timeWork: '10:00-19:00',
  },
  {
    name: 'Альфа-Банк',
    coordinates: [27.603, 53.862],
    currency: ['EUR', 'ARS'],
    address: 'ул.Центральная 17',
    timeWork: '10:00-19:00',
  },
  {
    name: 'Альфа-Банк',
    coordinates: [27.54, 53.895],
    currency: ['CAD', 'CNY'],
    address: 'ул.Центральная 17',
    timeWork: '10:00-19:00',
  },
  {
    name: 'Технобанк',
    coordinates: [27.552, 53.903],
    currency: ['USD', 'AUD', 'JPY'],
    address: 'ул.Центральная 17',
    timeWork: '10:00-19:00',
  },
  {
    name: 'Технобанк',
    coordinates: [27.549, 53.898],
    currency: ['EUR', 'CNY'],
    address: 'ул.Центральная 17',
    timeWork: '10:00-19:00',
  },
];
