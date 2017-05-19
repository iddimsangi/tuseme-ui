import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* services for the application */
import {AuthService} from "./auth.service";
import {TaarifaService} from "./taarifa.service";
import {UjumbeService} from "./ujumbe.service";
import {ReportService} from './report.service';
import {PetitionCategoryService} from './petition-category.service';
import {PetitionService} from './petition.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService,
    TaarifaService,
    UjumbeService,
    ReportService,
    PetitionService,
    PetitionCategoryService,

  ]
})
export class CoreModule { }
