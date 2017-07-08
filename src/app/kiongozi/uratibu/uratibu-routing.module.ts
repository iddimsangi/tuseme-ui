import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UratibuHomeComponent} from './uratibu-home/uratibu-home.component';

const routes: Routes = [
  {path:'',redirectTo:'wananchi',pathMatch:'full'},
  {path:'wananchi',component:UratibuHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UratibuRoutingModule { }
