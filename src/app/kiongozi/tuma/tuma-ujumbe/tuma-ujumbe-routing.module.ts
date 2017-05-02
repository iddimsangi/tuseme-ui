import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UjumbeHomeComponent} from "./ujumbe-home/ujumbe-home.component";
import {AndikaUjumbeComponent} from "./andika-ujumbe/andika-ujumbe.component";
import {UjumbeUliotumwaComponent} from "./ujumbe-uliotumwa/ujumbe-uliotumwa.component";

const routes: Routes = [
  {path: '', component: UjumbeHomeComponent,
  children: [
    {path: '', redirectTo: 'andika', pathMatch: 'full'},
    {path: 'andika', component: AndikaUjumbeComponent},
    {path: 'uliotumwa', component: UjumbeUliotumwaComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TumaUjumbeRoutingModule { }
