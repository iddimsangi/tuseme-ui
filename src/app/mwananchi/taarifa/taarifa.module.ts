import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaarifaRoutingModule } from './taarifa-routing.module';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  imports: [
    CommonModule,
    TaarifaRoutingModule
  ],
  declarations: [ContentsComponent],
    exports: [ContentsComponent]
})
export class TaarifaModule { }
