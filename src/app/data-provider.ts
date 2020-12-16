import {CovidData} from './model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataProvider {

  constructor(private _httpClient: HttpClient) {
  }

  public GetDataAsync(): Observable<CovidData[]> {
    return this._httpClient.get('https://pomber.github.io/covid19/timeseries.json')
      .pipe(
        map(data => data['Romania']
          .filter((e: CovidData) => e.confirmed > 0)
          .map((today: CovidData, idx, array) => {
            const yesterday = array[idx - 1];
            const confirmedDelta = today.confirmed - (yesterday?.confirmed ?? 0);
            const recoveredDelta = today.recovered - (yesterday?.recovered ?? 0);
            const active = today.confirmed - today.recovered - today.deaths;
            return {
              ...today,
              confirmedDelta,
              recoveredDelta,
              active
            };
          })
        )
        ,
        shareReplay()
      );
  }
}

