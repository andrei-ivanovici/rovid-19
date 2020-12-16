import {Component, OnInit} from '@angular/core';
import {DataProvider} from './data-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data;

  constructor(private dataProvider: DataProvider) {
  }

  ngOnInit() {
    this.data = this.dataProvider.GetDataAsync();
  }
}
