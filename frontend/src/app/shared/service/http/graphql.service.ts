import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export const gql = (literal: TemplateStringsArray) => {
  return literal[0];
};

@Injectable({providedIn: 'root'})
export class GraphqlService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  execute<T>(query: string, method: string, ...variables: any[]): Promise<T> {
    return this.httpClient.post('/graphql', {
      query: this.removeWhiteSpaces(query),
      variables: this.mapArgsToParamMap(variables),
    })
      .toPromise()
      .then(res => (res as any).data[method]);
  }

  private mapArgsToParamMap(variables: any[]): Record<string, any> {
    const result: any = {};
    let counter: number = 1;
    variables.forEach(arg => {
      result[`var${counter}`] = arg;
      counter++;
    });
    return result;
  }

  private removeWhiteSpaces(query: string): string {
    return query.replace(/\s+/g, ' ');
  }
}
