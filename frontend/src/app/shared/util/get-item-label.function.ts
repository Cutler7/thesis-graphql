import {SelectItem} from '../interface/select-item.interface';

export const getItemLabel = (list: SelectItem[], value: any): string => list
  .find(el => el.value === value)?.label;
