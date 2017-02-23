import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'karibu', pathMatch: 'full'},
   { path: 'kiongozi', loadChildren: 'app/kiongozi/kiongozi.module#KiongoziModule' },
    { path: 'mwananchi', loadChildren: 'app/mwananchi/mwananchi.module#MwananchiModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
