import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../../@theme/theme.module';

import { TrafficChartComponent } from './traffic-chart.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    TrafficChartComponent,
  ],
})
export class TableroModule { }
