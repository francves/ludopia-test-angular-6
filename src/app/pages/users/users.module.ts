import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { UsersComponent } from './users.component';

import { Ng2SmartTableModule } from 'ng2-smart-table'


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,

  ],
  declarations: [
    UsersComponent,
  ],
})
export class UsersModule { }
