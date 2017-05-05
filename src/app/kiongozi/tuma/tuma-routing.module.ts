import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentsComponent} from './contents/contents.component';


const routes: Routes = [
  {path: '', component: ContentsComponent},
  {path: 'taarifa', loadChildren: './tuma-taarifa/tuma-taarifa.module#TumaTaarifaModule'},
  {path: 'ripoti', loadChildren: './tuma-ripoti/tuma-ripoti.module#TumaRipotiModule'},
  {path: 'mapendekezo', loadChildren: './tuma-mapendekezo/tuma-mapendekezo.module#TumaMapendekezoModule'},
  {path: 'ujumbe', loadChildren: './tuma-ujumbe/tuma-ujumbe.module#TumaUjumbeModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TumaRoutingModule { }
