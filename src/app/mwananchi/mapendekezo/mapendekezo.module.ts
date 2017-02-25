import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapendekezoRoutingModule } from './mapendekezo-routing.module';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  imports: [
    CommonModule,
    MapendekezoRoutingModule
  ],
  declarations: [ContentsComponent],
  exports: [ContentsComponent]
})
export class MapendekezoModule { }
