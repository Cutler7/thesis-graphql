export const filterListData = (products: any[], filterArgs: any[]): any[] => {
  let result = products;
  filterArgs.forEach(filter => result = result
    .filter(el => compare(el[filter.key], filter, typeof products[0][filter.key])));
  return result;
};

const compare = (value, filterArg, valueType) => {
  switch (filterArg.op) {
    case 'eq':
      return checkEquality(value, filterArg.value, valueType);
    case 'neq':
      return !checkEquality(value, filterArg.value, valueType);
    case 'gt':
      return value >= Number(filterArg.value);
    case 'lt':
      return value <= Number(filterArg.value);
    case 'in':
      return filterArg.value.split().includes(value);
  }
};

const checkEquality = (value: string, arg: string, valueType: 'string' | 'number'): boolean => {
  if (valueType === 'string') {
    return value.toLowerCase().includes(arg.toLowerCase());
  } else {
    return Number(value) === Number(arg);
  }
};
