import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MalalamikoRoutingModule } from './malalamiko-routing.module';
import { MalalamikoHomeComponent } from './malalamiko-home/malalamiko-home.component';
import { MalalamikoMapyaComponent } from './malalamiko-mapya/malalamiko-mapya.component';
import { MalalamikoToaComponent } from './malalamiko-toa/malalamiko-toa.component';
import {FormsModule} from '@angular/forms';
import { MalalamikoHaririComponent } from './malalamiko-hariri/malalamiko-hariri.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MalalamikoRoutingModule
  ],
  declarations: [MalalamikoHomeComponent, MalalamikoMapyaComponent, MalalamikoToaComponent, MalalamikoHaririComponent]
})
export class MalalamikoModule { }
