import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaribuRoutingModule } from './karibu-routing.module';
import { AppComponent } from './app/app.component';
import { KaribuFooterComponent } from './karibu-footer/karibu-footer.component';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
@NgModule({
  imports: [
    CommonModule,
    KaribuRoutingModule,
    Angular2FontAwesomeModule
  ],
  declarations: [AppComponent, KaribuFooterComponent]
})
export class KaribuModule { }
