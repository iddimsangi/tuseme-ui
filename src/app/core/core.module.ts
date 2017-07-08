import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* services for the application */
import {AuthService} from "./auth.service";
import {TaarifaService} from "./taarifa.service";
import {UjumbeService} from "./ujumbe.service";
import {ReportService} from './report.service';
import {PetitionCategoryService} from './petition-category.service';
import {PetitionService} from './petition.service';
import {KayaService } from './kaya.service';
import {PositionService} from './position.service';
import {LeaderService} from './leader.service';
import { SessionService } from './session.service';
import {StreetService } from './street.service';
import { AdminService } from './admin.service';
import {MwananchiService} from './mwananchi.service';

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
    KayaService,
    PositionService,
    LeaderService,
    SessionService,
    StreetService,
    AdminService,
    MwananchiService
  ]
})
export class CoreModule { }
