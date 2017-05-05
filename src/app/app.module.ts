import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


  /* Root Components */
import { AppComponent } from './app.component';

/* eagerly loaded feature module */
import { KaribuModule } from './karibu/karibu.module';

/* core module */
import { CoreModule } from './core/core.module';

/* Module that Routes feature modules */
import { AppRoutingModule } from './app-routing.module';
import {TaarifaService} from './core/taarifa.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    KaribuModule,
    AppRoutingModule
  ],
  providers: [TaarifaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
