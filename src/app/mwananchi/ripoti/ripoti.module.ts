import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RipotiRoutingModule } from './ripoti-routing.module';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  imports: [
    CommonModule,
    RipotiRoutingModule
  ],
  declarations: [ContentsComponent],
  exports: [ContentsComponent]
})
export class RipotiModule { }
