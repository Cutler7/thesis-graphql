import {Injectable} from '@angular/core';
import {QueryListArgs} from '../interface/query-list-args.interface';

@Injectable({providedIn: 'root'})
export class QueryListArgsService {

  mapToQueryArgs(page: number, pageSize: number, searchParams): QueryListArgs {
    return {
      page,
      pageSize,
    };
  }
}
