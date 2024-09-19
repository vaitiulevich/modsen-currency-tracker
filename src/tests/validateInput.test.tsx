import { VALIDATION_MESSAGES } from '@constants/messages';
import { validateInput } from '@utils/validation';

describe('validateInput', () => {
  test('should return error for empty value', () => {
    const result = validateInput({ name: 'testField', value: '' });
    expect(result).toEqual({
      testField: VALIDATION_MESSAGES.EMPTY_VALUE,
    });
  });

  test('should return error for invalid value pattern', () => {
    const result = validateInput({ name: 'testField', value: 'invalid' });
    expect(result).toEqual({
      testField: VALIDATION_MESSAGES.INVALID_VALUE,
    });
  });

  test('should return error for value less than or equal to zero', () => {
    const result = validateInput({ name: 'testField', value: '0' });
    expect(result).toEqual({
      testField: VALIDATION_MESSAGES.MIN_VALUE,
    });
  });

  test('should return error for value greater than or equal to one million', () => {
    const result = validateInput({ name: 'testField', value: '1000000' });
    expect(result).toEqual({
      testField: VALIDATION_MESSAGES.MAX_VALUE,
    });
  });

  test('should return no errors for valid values', () => {
    const result = validateInput({ name: 'testField', value: '500' });
    expect(result).toEqual({});
  });

  test('should handle numeric values with commas', () => {
    const result = validateInput({ name: 'testField', value: '1,000' });
    expect(result).toEqual({});
  });
});
