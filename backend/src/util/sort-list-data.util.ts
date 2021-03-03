import {sortBy} from 'lodash';

export const sortListData = (data: any[], sortArg: string): any[] => {
  if (!sortArg) {
    return data;
  }
  const [key, direction] = sortArg.split('_');
  const result = sortBy(data, key);
  return direction === 'asc' ? result : result.reverse();
};
