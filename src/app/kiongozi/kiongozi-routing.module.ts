import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components to be Routed */
import { KiongoziComponent } from './kiongozi/kiongozi.component';
import { MarejeshoHomeComponent } from './marejesho-home/marejesho-home.component';
import { TumaHomeComponent } from './tuma-home/tuma-home.component';
import { DuaHomeComponent } from './dua-home/dua-home.component';

const routes: Routes = [
   { path: '', component: KiongoziComponent,
   children: [
     { path: '',   redirectTo: 'tuma', pathMatch: 'full' },
     { path: 'tuma', component: TumaHomeComponent },
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
