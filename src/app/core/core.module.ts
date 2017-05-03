import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* services for the application */
import { TaarifaService } from './taarifa.service';
import {AuthService} from "./auth.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ TaarifaService,AuthService ]
})
export class CoreModule { }
