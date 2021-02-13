export interface PageResponse<T> {
  pageSize: number;
  page: number;
  totalRecords: number;
  content: T[];
}
