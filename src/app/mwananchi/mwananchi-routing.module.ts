import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components to be Routed */
import { MwananchiComponent } from './mwananchi/mwananchi.component';

const routes: Routes = [
   { path: '', component: MwananchiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MwananchiRoutingModule { }
