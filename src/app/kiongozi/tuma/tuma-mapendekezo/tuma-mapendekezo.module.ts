import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumaMapendekezoRoutingModule } from './tuma-mapendekezo-routing.module';
import { MapendekezoHomeComponent } from './mapendekezo-home/mapendekezo-home.component';
import { AndikaMapendekezoComponent } from './andika-mapendekezo/andika-mapendekezo.component';
import { MapendekezoYaliyotumwaComponent } from './mapendekezo-yaliyotumwa/mapendekezo-yaliyotumwa.component';

@NgModule({
  imports: [
    CommonModule,
    TumaMapendekezoRoutingModule
  ],
  declarations: [MapendekezoHomeComponent, AndikaMapendekezoComponent, MapendekezoYaliyotumwaComponent]
})
export class TumaMapendekezoModule { }
