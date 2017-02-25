import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MwananchiRoutingModule } from './mwananchi-routing.module';
import { MwananchiComponent } from './mwananchi/mwananchi.component';
import { TaarifaHomeComponent } from './taarifa-home/taarifa-home.component';
import { DuaHomeComponent } from './dua-home/dua-home.component';
import { MapendekezoHomeComponent } from './mapendekezo-home/mapendekezo-home.component';

@NgModule({
  imports: [
    CommonModule,
    MwananchiRoutingModule
  ],
  declarations: [ MwananchiComponent, TaarifaHomeComponent, DuaHomeComponent, MapendekezoHomeComponent]
})
export class MwananchiModule { }
