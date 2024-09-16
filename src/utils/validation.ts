import { VALIDATION_MESSAGES } from '@constants/messages';
import { VALIDATION_PATTERN } from '@constants/timeline';

interface validationProp {
  name: string;
  value: string;
}

interface errorState {
  [key: string]: string;
}

export const validateInput = ({ name, value }: validationProp) => {
  const errors: errorState = {};

  if (value.trim() === '') {
    errors[name] = VALIDATION_MESSAGES.EMPTY_VALUE;
  }

  if (!VALIDATION_PATTERN.test(value)) {
    errors[name] = VALIDATION_MESSAGES.INVALID_VALUE;
  } else {
    const numericValue = parseFloat(value.replace(',', '.'));
    if (numericValue <= 0) {
      errors[name] = VALIDATION_MESSAGES.MIN_VALUE;
    }
    if (numericValue >= 1000000) {
      errors[name] = VALIDATION_MESSAGES.MAX_VALUE;
    }
  }

  return errors;
};
