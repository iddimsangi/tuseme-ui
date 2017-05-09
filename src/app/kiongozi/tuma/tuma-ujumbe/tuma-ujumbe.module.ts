import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumaUjumbeRoutingModule } from './tuma-ujumbe-routing.module';
import { UjumbeHomeComponent } from './ujumbe-home/ujumbe-home.component';
import { AndikaUjumbeComponent } from './andika-ujumbe/andika-ujumbe.component';
import { UjumbeUliotumwaComponent } from './ujumbe-uliotumwa/ujumbe-uliotumwa.component';
import {FormsModule} from "@angular/forms";
import { UjumbeHaririComponent } from './ujumbe-hariri/ujumbe-hariri.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TumaUjumbeRoutingModule
  ],
  declarations: [UjumbeHomeComponent, AndikaUjumbeComponent, UjumbeUliotumwaComponent, UjumbeHaririComponent]
})
export class TumaUjumbeModule { }
