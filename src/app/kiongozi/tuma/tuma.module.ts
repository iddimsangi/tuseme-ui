import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumaRoutingModule } from './tuma-routing.module';
import { ContentsComponent } from './contents/contents.component';
import { TumaTaarifaComponent } from './tuma-taarifa/tuma-taarifa.component';
import { TumaRipotiComponent } from './tuma-ripoti/tuma-ripoti.component';
import { TaarifaZilizotumwaComponent } from './taarifa-zilizotumwa/taarifa-zilizotumwa.component';
import { TaarifaHaririComponent } from './taarifa-hariri/taarifa-hariri.component';
import { AndikaTaarifaComponent } from './andika-taarifa/andika-taarifa.component';

@NgModule({
  imports: [
    CommonModule,
    TumaRoutingModule
  ],
  declarations: [ContentsComponent, TumaTaarifaComponent,
                TumaRipotiComponent, TaarifaZilizotumwaComponent,
                TaarifaHaririComponent, AndikaTaarifaComponent],
  exports: [ContentsComponent]
})
export class TumaModule { }
