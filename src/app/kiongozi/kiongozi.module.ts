import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiongoziRoutingModule } from './kiongozi-routing.module';
import { AppComponent } from './app/app.component';
import { KiongoziComponent } from './kiongozi/kiongozi.component';

@NgModule({
  imports: [
    CommonModule,
    KiongoziRoutingModule
  ],
  declarations: [AppComponent, KiongoziComponent],
  exports: [AppComponent]
})
export class KiongoziModule { }
