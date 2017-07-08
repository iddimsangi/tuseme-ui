import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UratibuRoutingModule } from './uratibu-routing.module';
import { UratibuHomeComponent } from './uratibu-home/uratibu-home.component';

@NgModule({
  imports: [
    CommonModule,
    UratibuRoutingModule
  ],
  declarations: [UratibuHomeComponent]
})
export class UratibuModule { }
