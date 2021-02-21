export interface PageResponse<T = any> {
  pageSize: number;
  page: number;
  totalRecords: number;
  content: T[];
}
