import {FilterOperator} from '../enum/filter-operator.enum';

interface FilterArg {
  key: string;
  value: string;
  op: FilterOperator;
}

export interface QueryListArgs {
  page?: number,
  pageSize?: number;
  orderBy?: string;
  filterArgs?: FilterArg[];
}
