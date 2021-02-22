import {PageResponse} from '../interface/page-response.interface';

export const getPageOfData = (data: any[], page: number = 0, pageSize: number = 10): PageResponse => {
  const startIdx = page * pageSize;
  return {
    pageSize,
    page,
    totalRecords: data.length,
    content: data.slice(startIdx, startIdx + pageSize),
  };
};
