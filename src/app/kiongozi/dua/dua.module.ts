import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuaRoutingModule } from './dua-routing.module';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  imports: [
    CommonModule,
    DuaRoutingModule
  ],
  declarations: [ContentsComponent],
  exports: [ContentsComponent]
})
export class DuaModule { }
