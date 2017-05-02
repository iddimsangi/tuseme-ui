import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapendekezoHomeComponent} from "./mapendekezo-home/mapendekezo-home.component";
import {TumaMapendekezoComponent} from "./tuma-mapendekezo.component";
import {AndikaMapendekezoComponent} from "./andika-mapendekezo/andika-mapendekezo.component";
import {MapendekezoYaliyotumwaComponent} from "./mapendekezo-yaliyotumwa/mapendekezo-yaliyotumwa.component";

const routes: Routes = [
  {path: '', component: MapendekezoHomeComponent,
  children:[
    {path: '', redirectTo: 'andika', pathMatch: 'full'},
    {path: 'andika', component: AndikaMapendekezoComponent},
    {path: 'yaliyotumwa', component: MapendekezoYaliyotumwaComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TumaMapendekezoRoutingModule { }
