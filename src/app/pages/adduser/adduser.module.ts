import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { AdduserComponent } from './adduser.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AdduserComponent,
  ],
})
export class AdduserModule { }
