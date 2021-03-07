import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export const gql = (literal: TemplateStringsArray) => {
  return literal[0];
};

@Injectable({providedIn: 'root'})
export class GraphqlService {

  constructor(
    protected httpClient: HttpClient,
  ) {
  }

  execute<T>(query: string, method: string, ...variables: any[]): Promise<T> {
    return this.callGraphqlMethod(query, method, undefined, ...variables);
  }

  executeWithCustomHeaders<T>(query: string, method: string, headers: HttpHeaders, ...variables: any[]): Promise<T> {
    return this.callGraphqlMethod(query, method, headers, ...variables);
  }

  private callGraphqlMethod<T>(query: string, method: string, headers: HttpHeaders, ...variables: any[]): Promise<T> {
    return this.httpClient.post('/graphql', {
      query: this.removeWhiteSpaces(query),
      variables: this.mapArgsToParamMap(variables),
    }, {headers})
      .toPromise()
      .then(res => (res as any).data[method]);
  }

  protected mapArgsToParamMap(variables: any[]): Record<string, any> {
    const result: any = {};
    let counter: number = 1;
    variables.forEach(arg => {
      result[`var${counter}`] = arg;
      counter++;
    });
    return result;
  }

  protected removeWhiteSpaces(query: string): string {
    return query.replace(/\s+/g, ' ');
  }
}
