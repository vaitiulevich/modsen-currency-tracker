interface Bank {
  name: string;
  coordinates: [number, number];
  currency: string[];
}
export const allBanks: Bank[] = [
  {
    name: 'Приорбанк',
    coordinates: [27.594, 53.936],
    currency: ['USD', 'CAD'],
  },
  {
    name: 'Приорбанк',
    coordinates: [27.492, 53.906],
    currency: ['AUD', 'ARS', 'JPY'],
  },
  {
    name: 'Альфа-Банк',
    coordinates: [27.603, 53.862],
    currency: ['EUR', 'ARS'],
  },
  {
    name: 'Альфа-Банк',
    coordinates: [27.54, 53.895],
    currency: ['CAD', 'CNY'],
  },
  {
    name: 'Технобанк',
    coordinates: [27.552, 53.903],
    currency: ['USD', 'AUD', 'JPY'],
  },
  {
    name: 'Технобанк',
    coordinates: [27.549, 53.898],
    currency: ['EUR', 'CNY'],
  },
];
