import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarejeshoRoutingModule } from './marejesho-routing.module';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  imports: [
    CommonModule,
    MarejeshoRoutingModule
  ],
  declarations: [ContentsComponent],
  exports: [ContentsComponent]
})
export class MarejeshoModule { }
