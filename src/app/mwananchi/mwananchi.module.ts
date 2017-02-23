import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MwananchiRoutingModule } from './mwananchi-routing.module';
import { AppComponent } from './app/app.component';
import { MwananchiComponent } from './mwananchi/mwananchi.component';

@NgModule({
  imports: [
    CommonModule,
    MwananchiRoutingModule
  ],
  declarations: [AppComponent, MwananchiComponent]
})
export class MwananchiModule { }
