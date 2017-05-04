import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuaRoutingModule } from './dua-routing.module';
import { ContentsComponent } from './contents/contents.component';
import { NewDuaComponent } from './new-dua/new-dua.component';

@NgModule({
  imports: [
    CommonModule,
    DuaRoutingModule
  ],
  declarations: [ContentsComponent, NewDuaComponent],
  exports: [ContentsComponent]
})
export class DuaModule { }
