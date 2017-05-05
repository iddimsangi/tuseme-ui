import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AndikaComponent} from './andika/andika.component';
import {ZilizoandikwaComponent} from './zilizoandikwa/zilizoandikwa.component';
import {HaririTaarifaComponent} from './hariri-taarifa/hariri-taarifa.component';
import {TaarifaHomeComponent} from './taarifa-home/taarifa-home.component';


const routes: Routes = [
  {path: '', component: TaarifaHomeComponent,
    children: [
      {path : '', redirectTo: 'andika', pathMatch: 'full'},
      {path: 'andika', component: AndikaComponent},
      {path: 'taarifa-zilizotumwa', component: ZilizoandikwaComponent},
      {path: 'hariri-taarifa', component: HaririTaarifaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TumaTaarifaRoutingModule { }
