import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MwananchiRoutingModule } from './mwananchi-routing.module';
import { MwananchiComponent } from './mwananchi/mwananchi.component';

@NgModule({
  imports: [
    CommonModule,
    MwananchiRoutingModule
  ],
  declarations: [ MwananchiComponent]
})
export class MwananchiModule { }
