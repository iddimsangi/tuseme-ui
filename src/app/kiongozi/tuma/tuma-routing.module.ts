import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentsComponent} from "./contents/contents.component";
import {TumaTaarifaComponent} from "./tuma-taarifa/tuma-taarifa.component";
import {TumaRipotiComponent} from "./tuma-ripoti/tuma-ripoti.component";
import {TumaMapendekezoComponent} from "./tuma-mapendekezo/tuma-mapendekezo.component";
import {TumaUjumbeComponent} from "./tuma-ujumbe/tuma-ujumbe.component";
import {TaarifaZilizotumwaComponent} from "./taarifa-zilizotumwa/taarifa-zilizotumwa.component";
import {TaarifaHaririComponent} from "./taarifa-hariri/taarifa-hariri.component";
import {AndikaTaarifaComponent} from "./andika-taarifa/andika-taarifa.component";

const routes: Routes = [
  {path:'', component:ContentsComponent},
  {path:'taarifa',component:TumaTaarifaComponent,
  children:[
    {path:'',redirectTo:'andika',pathMatch:'full'},
    {path:'taarifa-zilizotumwa', component:TaarifaZilizotumwaComponent },
    {path:'andika', component:AndikaTaarifaComponent}
  ]
  },
  {path:'ripoti',component:TumaRipotiComponent},
  {path:'mapendekezo', loadChildren: './tuma-mapendekezo/tuma-mapendekezo.module#TumaMapendekezoModule'},
  {path:'ujumbe', loadChildren: './tuma-ujumbe/tuma-ujumbe.module#TumaUjumbeModule'},

  {path:'taarifa-hariri', component:TaarifaHaririComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TumaRoutingModule { }
