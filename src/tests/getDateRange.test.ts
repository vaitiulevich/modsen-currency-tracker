import { getDateRange } from '@utils/dateHelpers';

describe('getDateRange', () => {
  test('should return today for minOffset and maxOffset as 0', () => {
    const result = getDateRange(0, 0);
    const today = new Date();
    expect(result.dateMin).toBeCloseTo(today.getTime(), -3);
    expect(result.dateMax).toBeCloseTo(today.getTime(), -3);
  });

  test('should return a range of dates for minOffset and maxOffset', () => {
    const result = getDateRange(5, 3);
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 5);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 3);

    expect(result.dateMin).toBeCloseTo(minDate.getTime(), -3);
    expect(result.dateMax).toBeCloseTo(maxDate.getTime(), -3);
  });

  test('should return correct dates for larger offsets', () => {
    const result = getDateRange(10, 10);
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 10);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 10);

    expect(result.dateMin).toBeCloseTo(minDate.getTime(), -3);
    expect(result.dateMax).toBeCloseTo(maxDate.getTime(), -3);
  });
});
