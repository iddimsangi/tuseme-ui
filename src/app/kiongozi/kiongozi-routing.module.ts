import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components to be Routed */
import { KiongoziComponent } from './kiongozi/kiongozi.component';

const routes: Routes = [
   { path: '', component: KiongoziComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class KiongoziRoutingModule { }
