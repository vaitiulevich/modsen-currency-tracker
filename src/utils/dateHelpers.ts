export const getDateRange = (minOffset: number, maxOffset: number) => {
  const dateMin = new Date();
  dateMin.setDate(dateMin.getDate() - minOffset);

  const dateMax = new Date();
  dateMax.setDate(dateMax.getDate() + maxOffset);

  return {
    dateMin: dateMin.getTime(),
    dateMax: dateMax.getTime(),
  };
};
