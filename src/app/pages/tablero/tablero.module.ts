import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { TableroComponent } from './tablero.component';

import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';

import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';

import { StatusCardComponent } from './status-card/status-card.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    TableroComponent,
    TrafficComponent,
    TrafficChartComponent,
    TemperatureComponent,
    TemperatureDraggerComponent,
    StatusCardComponent,
  ],
})
export class TableroModule { }
