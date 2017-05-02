import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumaUjumbeRoutingModule } from './tuma-ujumbe-routing.module';
import { UjumbeHomeComponent } from './ujumbe-home/ujumbe-home.component';
import { AndikaUjumbeComponent } from './andika-ujumbe/andika-ujumbe.component';
import { UjumbeUliotumwaComponent } from './ujumbe-uliotumwa/ujumbe-uliotumwa.component';

@NgModule({
  imports: [
    CommonModule,
    TumaUjumbeRoutingModule
  ],
  declarations: [UjumbeHomeComponent, AndikaUjumbeComponent, UjumbeUliotumwaComponent]
})
export class TumaUjumbeModule { }
