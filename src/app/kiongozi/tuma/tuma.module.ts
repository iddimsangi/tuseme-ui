import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumaRoutingModule } from './tuma-routing.module';
import { ContentsComponent } from './contents/contents.component';
import { TumaTaarifaComponent } from './tuma-taarifa/tuma-taarifa.component';
import { TumaRipotiComponent } from './tuma-ripoti/tuma-ripoti.component';
import { TumaUjumbeComponent } from './tuma-ujumbe/tuma-ujumbe.component';
import { TumaMapendekezoComponent } from './tuma-mapendekezo/tuma-mapendekezo.component';
import { TaarifaZilizotumwaComponent } from './taarifa-zilizotumwa/taarifa-zilizotumwa.component';
import { TaarifaHaririComponent } from './taarifa-hariri/taarifa-hariri.component';
import { AndikaTaarifaComponent } from './andika-taarifa/andika-taarifa.component';
import { RipotiHaririComponent } from './ripoti-hariri/ripoti-hariri.component';
import { RipotiZilizotumwaComponent } from './ripoti-zilizotumwa/ripoti-zilizotumwa.component';
import { AndikaZilizotumwaComponent } from './andika-zilizotumwa/andika-zilizotumwa.component';

@NgModule({
  imports: [
    CommonModule,
    TumaRoutingModule
  ],
  declarations: [ContentsComponent, TumaTaarifaComponent, TumaRipotiComponent, TumaUjumbeComponent, TumaMapendekezoComponent, TaarifaZilizotumwaComponent, TaarifaHaririComponent, AndikaTaarifaComponent, RipotiHaririComponent, RipotiZilizotumwaComponent, AndikaZilizotumwaComponent],
  exports: [ContentsComponent]
})
export class TumaModule { }
