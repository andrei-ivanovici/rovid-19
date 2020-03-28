import {Component, Input, OnChanges} from '@angular/core';
import {CovidData} from '../model';

interface ChartSeries {
  name: string;
  series: any [];
}

@Component({
  selector: 'app-covid-data-chart',
  templateUrl: './covid-data-chart.component.html',
  styleUrls: ['./covid-data-chart.component.scss']
})
export class CovidDataChartComponent implements OnChanges {

  @Input()
  public data;

  public series;

  public xAxis = 'Date';
  public yAxis = 'Population';
  colorScheme = {
    domain: ['#E44D25', '#4126a4', '#17cf77', '#e50200']
  };

  async ngOnChanges() {

    if (!this.data) {
      return;
    }
    const roData = this.data;
    this.series = [
      getConfirmed(roData),
      getActive(roData),
      getRecovered(roData),
      getDeaths(roData)
    ];
  }
}


function getActive(rawData: CovidData[]): ChartSeries {
  return {
    name: 'Active',
    series: rawData.map(d => ({
      name: d.date,
      value: d.confirmed - d.recovered - d.deaths
    }))
  };
}

function getRecovered(rawData: CovidData[]): ChartSeries {
  return {
    name: 'Recovered Cases',
    series: rawData.map(d => ({
      name: d.date,
      value: d.recovered
    }))
  };
}

function getConfirmed(rawData: CovidData[]): ChartSeries {
  return {
    name: 'Confirmed Cases',
    series: rawData.map(d => ({
      name: d.date,
      value: d.confirmed
    }))
  };
}

function getDeaths(rawData: CovidData[]): ChartSeries {
  return {
    name: 'Deaths',
    series: rawData.map(d => ({
      name: d.date,
      value: d.deaths
    }))
  };
}

