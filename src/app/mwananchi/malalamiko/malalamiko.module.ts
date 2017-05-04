import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MalalamikoRoutingModule } from './malalamiko-routing.module';
import { MalalamikoHomeComponent } from './malalamiko-home/malalamiko-home.component';
import { MalalamikoMapyaComponent } from './malalamiko-mapya/malalamiko-mapya.component';
import { MalalamikoToaComponent } from './malalamiko-toa/malalamiko-toa.component';

@NgModule({
  imports: [
    CommonModule,
    MalalamikoRoutingModule
  ],
  declarations: [MalalamikoHomeComponent, MalalamikoMapyaComponent, MalalamikoToaComponent]
})
export class MalalamikoModule { }
