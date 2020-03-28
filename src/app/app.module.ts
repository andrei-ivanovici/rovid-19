import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppHeaderComponent} from './app-header/app-header.component';
import {CovidDataChartComponent} from './covid-data-chart/covid-data-chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {HttpClientModule} from '@angular/common/http';
import { CovidDataComponent } from './covid-data/covid-data.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CovidDataChartComponent,
    CovidDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    NgxChartsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
