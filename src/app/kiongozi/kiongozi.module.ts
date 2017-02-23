import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiongoziRoutingModule } from './kiongozi-routing.module';
import { AppComponent } from './app/app.component';

@NgModule({
  imports: [
    CommonModule,
    KiongoziRoutingModule
  ],
  declarations: [AppComponent]
})
export class KiongoziModule { }
