import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CovidData} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.data = this.httpClient.get('https://pomber.github.io/covid19/timeseries.json')
      .pipe(map(data => data['Romania'].filter((e: CovidData) => e.confirmed > 0)));
  }
}
