import {SelectItem} from '../interface/select-item.interface';

export const ORDER_STATUS: SelectItem[] = [
  {label: 'przyjęte', value: 'PENDING'},
  {label: 'w trakcie realizacji', value: 'WORKING'},
  {label: 'zrealizowane', value: 'DONE'},
  {label: 'odrzucone', value: 'REJECTED'},
  {label: 'reklamacja', value: 'COMPLAINT'},
];
