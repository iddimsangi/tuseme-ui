import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MwananchiRoutingModule } from './mwananchi-routing.module';
import { AppComponent } from './app/app.component';

@NgModule({
  imports: [
    CommonModule,
    MwananchiRoutingModule
  ],
  declarations: [AppComponent]
})
export class MwananchiModule { }
