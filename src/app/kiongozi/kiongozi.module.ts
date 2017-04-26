import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* routing module for Kiongozi feature module */
import { KiongoziRoutingModule } from './kiongozi-routing.module';

/* components of kiongozi feature module */
import { KiongoziComponent } from './kiongozi/kiongozi.component';
import { TumaHomeComponent } from './tuma-home/tuma-home.component';
import { MarejeshoHomeComponent } from './marejesho-home/marejesho-home.component';
import { DuaHomeComponent } from './dua-home/dua-home.component';

/* Inner modules feature modules of Kiongozi Feature Module */
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    KiongoziRoutingModule
  ],
  declarations: [ KiongoziComponent, TumaHomeComponent, MarejeshoHomeComponent, DuaHomeComponent, FooterComponent, HeaderComponent],
})
export class KiongoziModule { }
