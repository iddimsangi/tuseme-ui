import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components to be Routed */
import { KiongoziComponent } from './kiongozi/kiongozi.component';

const routes: Routes = [
   { path: '', component: KiongoziComponent,
   children: [
     { path: '',   redirectTo: 'tuma', pathMatch: 'full' },
     { path: 'tuma', loadChildren: './tuma/tuma.module#TumaModule'},
     { path: 'dua', loadChildren:'./dua/dua.module#DuaModule' },
     { path: 'marejesho', loadChildren:'./marejesho/marejesho.module#MarejeshoModule' }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class KiongoziRoutingModule { }
