import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumaMapendekezoRoutingModule } from './tuma-mapendekezo-routing.module';
import { MapendekezoHomeComponent } from './mapendekezo-home/mapendekezo-home.component';
import { AndikaMapendekezoComponent } from './andika-mapendekezo/andika-mapendekezo.component';
import { MapendekezoYaliyotumwaComponent } from './mapendekezo-yaliyotumwa/mapendekezo-yaliyotumwa.component';
import {FormsModule} from '@angular/forms';
import { FormInputsComponent } from './form-inputs/form-inputs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TumaMapendekezoRoutingModule
  ],
  declarations: [MapendekezoHomeComponent, AndikaMapendekezoComponent, MapendekezoYaliyotumwaComponent, FormInputsComponent]
})
export class TumaMapendekezoModule { }
