import {EnumerableType} from '../interface/enumerable-type.interface';

export const ORDER_STATUS: EnumerableType[] = [
  {label: 'przyjęte', code: 'PENDING'},
  {label: 'w trakcie realizacji', code: 'WORKING'},
  {label: 'zrealizowane', code: 'DONE'},
  {label: 'odrzucone', code: 'REJECTED'},
];
