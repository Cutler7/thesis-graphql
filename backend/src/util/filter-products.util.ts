export const filterProducts = (products: any[], filterArgs: any[]): any[] => {
  const result = products;
  return result;
};

const getArg = (filterArgs: any[], name: string) => {
  return filterArgs.find(el => el.name);
};
