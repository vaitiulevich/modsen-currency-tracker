export const includesNormalizeStr = (
  str: string = '',
  search: string,
): boolean => {
  return str.toLowerCase().includes(search.toLowerCase());
};
