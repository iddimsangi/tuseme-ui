import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components to be Routed */
import { KiongoziComponent } from './kiongozi/kiongozi.component';
import { MarejeshoHomeComponent } from './marejesho-home/marejesho-home.component';
import { TumaHomeComponent } from './tuma-home/tuma-home.component';
import { DuaHomeComponent } from './dua-home/dua-home.component';
import {TumaMapendekezoComponent} from "./tuma/tuma-mapendekezo/tuma-mapendekezo.component";
import {TumaRipotiComponent} from "./tuma/tuma-ripoti/tuma-ripoti.component";
import {TumaTaarifaComponent} from "./tuma/tuma-taarifa/tuma-taarifa.component";
import {ContentsComponent} from "./tuma/contents/contents.component";

const routes: Routes = [
   { path: '', component: KiongoziComponent,
   children: [
     { path: '',   redirectTo: 'tuma', pathMatch: 'full' },
     { path: 'tuma', component: TumaHomeComponent,

     children:[
       {path:'', component:ContentsComponent},
       {path:'taarifa', component:TumaTaarifaComponent},
       {path:'ripoti', component:TumaRipotiComponent},
       {path:'mapendekezo', component:TumaMapendekezoComponent},
     ]
     },
     { path: 'dua', component: DuaHomeComponent },
     { path: 'marejesho', component: MarejeshoHomeComponent }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class KiongoziRoutingModule { }
