import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components to be Routed */
import { AppComponent } from './app/app.component';

const routes: Routes = [
   { path: 'karibu', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class KaribuRoutingModule { }
