export const timelineFormFields = [
  {
    name: 'x',
    type: 'text',
    fulltitle: 'Date',
    required: true,
    readonly: true,
  },
  {
    name: 'o',
    type: 'text',
    fulltitle: 'Open',
    required: true,
    readonly: false,
  },
  {
    name: 'c',
    type: 'text',
    fulltitle: 'Close',
    required: true,
    readonly: false,
  },
  {
    name: 'l',
    type: 'text',
    fulltitle: 'Low',
    required: true,
    readonly: false,
  },
  {
    name: 'h',
    type: 'text',
    fulltitle: 'High',
    required: true,
    readonly: false,
  },
];

export const INITIAL_CURRENCY = 'ARS';
export const DATE_MIN_OFFSET = 30;
export const DATE_MAX_OFFSET = 2;

export const VALIDATION_PATTERN = /^\d*([.,]\d{0,7})?$/;
