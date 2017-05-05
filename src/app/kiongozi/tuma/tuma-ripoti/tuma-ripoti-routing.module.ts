import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RipotiHomeComponent} from './ripoti-home/ripoti-home.component';
import {AndikaRipotiComponent} from './andika-ripoti/andika-ripoti.component';
import {RipotiZilizotumwaComponent} from './ripoti-zilizotumwa/ripoti-zilizotumwa.component';
import {HaririRipotiComponent} from './hariri-ripoti/hariri-ripoti.component';

const routes: Routes = [
  {path: '', component: RipotiHomeComponent,
    children: [
      {path: '', redirectTo: 'andika', pathMatch: 'full'},
      {path: 'andika', component: AndikaRipotiComponent},
      {path: 'ripoti-zilizotumwa', component: RipotiZilizotumwaComponent},
      {path: 'hariri-ripoti', component: HaririRipotiComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TumaRipotiRoutingModule { }
