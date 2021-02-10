import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit() {
    this.httpClient.post('/graphql', {query: 'query {hello}'}).toPromise()
      .then(res => console.log(res));
  }
}
