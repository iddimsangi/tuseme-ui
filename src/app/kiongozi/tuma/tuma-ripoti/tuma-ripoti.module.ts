import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TumaRipotiRoutingModule } from './tuma-ripoti-routing.module';
import { AndikaRipotiComponent } from './andika-ripoti/andika-ripoti.component';
import { RipotiZilizotumwaComponent } from './ripoti-zilizotumwa/ripoti-zilizotumwa.component';
import { HaririRipotiComponent } from './hariri-ripoti/hariri-ripoti.component';
import { RipotiHomeComponent } from './ripoti-home/ripoti-home.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TumaRipotiRoutingModule
  ],
  declarations: [AndikaRipotiComponent, RipotiZilizotumwaComponent, HaririRipotiComponent, RipotiHomeComponent]
})
export class TumaRipotiModule { }
