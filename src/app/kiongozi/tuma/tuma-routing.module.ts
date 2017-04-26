import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentsComponent} from "./contents/contents.component";
import {TumaTaarifaComponent} from "./tuma-taarifa/tuma-taarifa.component";
import {TumaRipotiComponent} from "./tuma-ripoti/tuma-ripoti.component";
import {TumaMapendekezoComponent} from "./tuma-mapendekezo/tuma-mapendekezo.component";
import {TumaUjumbeComponent} from "./tuma-ujumbe/tuma-ujumbe.component";

const routes: Routes = [
  {path:'', component:ContentsComponent},
  {path:'taarifa',component:TumaTaarifaComponent},
  {path:'ripoti',component:TumaRipotiComponent},
  {path:'mapendekezo',component:TumaMapendekezoComponent},
  {path:'ujumbe',component:TumaUjumbeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TumaRoutingModule { }
