import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumaTaarifaRoutingModule } from './tuma-taarifa-routing.module';
import { TaarifaHomeComponent } from './taarifa-home/taarifa-home.component';
import { AndikaComponent } from './andika/andika.component';
import { ZilizoandikwaComponent } from './zilizoandikwa/zilizoandikwa.component';
import { HaririTaarifaComponent } from './hariri-taarifa/hariri-taarifa.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TumaTaarifaRoutingModule

  ],
  declarations: [TaarifaHomeComponent, AndikaComponent, ZilizoandikwaComponent, HaririTaarifaComponent]
})
export class TumaTaarifaModule { }
