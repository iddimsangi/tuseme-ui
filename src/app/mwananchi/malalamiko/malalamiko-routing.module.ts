import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MalalamikoHomeComponent} from "./malalamiko-home/malalamiko-home.component";
import {MalalamikoMapyaComponent} from "./malalamiko-mapya/malalamiko-mapya.component";
import {MalalamikoToaComponent} from "./malalamiko-toa/malalamiko-toa.component";
import {MalalamikoHaririComponent} from './malalamiko-hariri/malalamiko-hariri.component';

const routes: Routes = [
  {path: '', component: MalalamikoHomeComponent,
  children: [
    {path: '', redirectTo:'zote', pathMatch: 'full'},
    {path: 'zote', component: MalalamikoMapyaComponent },
    {path: 'toa', component: MalalamikoToaComponent}
  ]
  },
  {path:'rekebisha/:id',component: MalalamikoHaririComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MalalamikoRoutingModule { }
