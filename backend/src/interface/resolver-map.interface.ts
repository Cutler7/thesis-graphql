import {ResolverContext} from './resolver-context.interface';

type ResolverFn = (obj: any, args: Record<string, any>, context: ResolverContext) => Promise<any>

export interface ResolverMap {
  Query: Record<string, ResolverFn>;
  Mutation: Record<string, ResolverFn>;

  [key: string]: Record<string, ResolverFn>;
}
