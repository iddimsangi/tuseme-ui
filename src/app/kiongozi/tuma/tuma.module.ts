import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumaRoutingModule } from './tuma-routing.module';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  imports: [
    CommonModule,
    TumaRoutingModule
  ],
  declarations: [ContentsComponent],
  exports: [ContentsComponent]
})
export class TumaModule { }
