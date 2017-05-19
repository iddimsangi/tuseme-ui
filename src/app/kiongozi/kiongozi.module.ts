import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* routing module for Kiongozi feature module */
import { KiongoziRoutingModule } from './kiongozi-routing.module';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

/* components of kiongozi feature module */
import { KiongoziComponent } from './kiongozi/kiongozi.component';

/* Inner modules feature modules of Kiongozi Feature Module */
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  imports: [
    CommonModule,
    KiongoziRoutingModule,
    Angular2FontAwesomeModule
  ],
  declarations: [ KiongoziComponent, FooterComponent, HeaderComponent, SideMenuComponent],
})
export class KiongoziModule { }
