import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components to be Routed */
import { MwananchiComponent } from './mwananchi/mwananchi.component';
import { DuaHomeComponent } from './dua-home/dua-home.component';
import { MapendekezoHomeComponent } from './mapendekezo-home/mapendekezo-home.component';
import { TaarifaHomeComponent } from './taarifa-home/taarifa-home.component';
import { ReportHomeComponent } from './report-home/report-home.component';

const routes: Routes = [
   { path: '', component: MwananchiComponent,
   children: [
     { path: '',   redirectTo: 'taarifa', pathMatch: 'full' },
     { path: 'taarifa', component: TaarifaHomeComponent },
     { path: 'dua', component: DuaHomeComponent },
     { path: 'mapendekezo', component: MapendekezoHomeComponent },
     { path: 'ripoti', component: ReportHomeComponent }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MwananchiRoutingModule { }
