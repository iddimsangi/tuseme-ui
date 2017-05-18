import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* services for the application */
import {AuthService} from "./auth.service";
import {TaarifaService} from "./taarifa.service";
import {UjumbeService} from "./ujumbe.service";
import {ReportService} from './report.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthService,TaarifaService,UjumbeService, ReportService ]
})
export class CoreModule { }
