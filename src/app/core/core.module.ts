import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* services for the application */
import {AuthService} from "./auth.service";
import {TaarifaService} from "./taarifa.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthService,TaarifaService ]
})
export class CoreModule { }
