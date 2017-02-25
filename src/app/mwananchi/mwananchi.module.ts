import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* routing inner modules */
import { MwananchiRoutingModule } from './mwananchi-routing.module';

/* components of Mwananchi feature modules */
import { MwananchiComponent } from './mwananchi/mwananchi.component';
import { TaarifaHomeComponent } from './taarifa-home/taarifa-home.component';
import { DuaHomeComponent } from './dua-home/dua-home.component';
import { MapendekezoHomeComponent } from './mapendekezo-home/mapendekezo-home.component';

/* Inner modules feature modules for mwanchi feature module */
import { TaarifaModule } from './taarifa/taarifa.module';
import{ DuaModule } from './dua/dua.module';
import { MapendekezoModule } from './mapendekezo/mapendekezo.module';

@NgModule({
  imports: [
    CommonModule,
    TaarifaModule,
    DuaModule,
    MapendekezoModule,
    MwananchiRoutingModule
  ],
  declarations: [ MwananchiComponent, TaarifaHomeComponent, DuaHomeComponent, MapendekezoHomeComponent]
})
export class MwananchiModule { }
