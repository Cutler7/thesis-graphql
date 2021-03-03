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
      return checkIsGreater(value, filterArg.value, valueType, 'greater');
    case 'lt':
      return checkIsGreater(value, filterArg.value, valueType, 'less');
    case 'in':
      return filterArg.value.split(',').includes(value);
  }
};

const checkEquality = (value: any, arg: string, valueType: 'string' | 'number'): boolean => {
  if (valueType === 'string') {
    return value.toLowerCase().includes(arg.toLowerCase());
  } else {
    return Number(value) === Number(arg);
  }
};

const checkGreaterLess = (val1, val2, greaterLess: 'greater' | 'less') =>
  greaterLess === 'greater' ? val1 >= val2 : val1 <= val2;

const checkIsGreater = (
  value: any,
  arg: string,
  valueType: 'object' | 'number',
  greaterLess: 'greater' | 'less',
): boolean => {
  if (valueType === 'number') {
    return checkGreaterLess(Number(value), Number(arg), greaterLess);
  } else {
    return checkGreaterLess(value.getTime(), (new Date(arg)).getTime(), greaterLess);
  }
};
