import {Component, Input, OnChanges} from '@angular/core';
import {CovidData} from '../model';

@Component({
  selector: 'app-covid-data',
  templateUrl: './covid-data.component.html',
  styleUrls: ['./covid-data.component.scss']
})
export class CovidDataComponent implements OnChanges {

  @Input()
  public data: CovidData[];

  public listData: CovidData[];

  ngOnChanges(): void {

    if (!this.data) {
      return;
    }
    this.listData = this.data.map((_, idx) => this.data[this.data.length - idx - 1]);
  }


}
