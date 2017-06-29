import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { StreetsComponent } from './streets/streets.component';
import { AllStreetsComponent } from './all-streets/all-streets.component';
import { MatangazoComponent } from './matangazo/matangazo.component';
import { RipotiComponent } from './ripoti/ripoti.component';
import { KayaComponent } from './kaya/kaya.component';
import { MalalamikoComponent } from './malalamiko/malalamiko.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, NavigationComponent, DashboardComponent, UsersComponent, StreetsComponent, AllStreetsComponent, MatangazoComponent, RipotiComponent, KayaComponent, MalalamikoComponent]
})
export class AdminModule { }
