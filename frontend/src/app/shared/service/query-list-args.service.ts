import {Injectable} from '@angular/core';
import {FilterArg, QueryListArgs} from '../interface/query-list-args.interface';

@Injectable({providedIn: 'root'})
export class QueryListArgsService {

  mapToQueryArgs(page: number, pageSize: number, filterArgs: FilterArg[]): QueryListArgs {
    return {
      page,
      pageSize,
      filterArgs,
    };
  }
}
