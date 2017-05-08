import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaribuRoutingModule } from './karibu-routing.module';
import { AppComponent } from './app/app.component';
import { KaribuFooterComponent } from './karibu-footer/karibu-footer.component';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Angular2FontAwesomeModule,
    KaribuRoutingModule

  ],
  declarations: [AppComponent, KaribuFooterComponent]
})
export class KaribuModule { }
