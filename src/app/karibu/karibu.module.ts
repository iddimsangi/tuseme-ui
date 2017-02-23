import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaribuRoutingModule } from './karibu-routing.module';
import { AppComponent } from './app/app.component';

@NgModule({
  imports: [
    CommonModule,
    KaribuRoutingModule
  ],
  declarations: [AppComponent]
})
export class KaribuModule { }
