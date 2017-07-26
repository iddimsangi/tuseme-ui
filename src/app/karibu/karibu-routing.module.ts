import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components to be Routed */
import { AppComponent } from './app/app.component';
import {LoginComponent} from '../shared/login/login.component';
import {RegisterComponent} from '../shared/register/register.component';
import {MwanzoComponent} from './mwanzo/mwanzo.component';
import {RegisterLeaderComponent} from '../shared/register-leader/register-leader.component';
import {KuhusuComponent} from './kuhusu/kuhusu.component';
import {TafutaMtaaComponent } from './tafuta-mtaa/tafuta-mtaa.component';


const routes: Routes = [
    { path: 'karibu', component: AppComponent,
     children:[
       {path:'',redirectTo:'mwanzo',pathMatch:'full'},
       {path:'mwanzo', component:MwanzoComponent,
       children:[
         {path:'', redirectTo:'tafuta-mtaa',pathMatch:'full'},
         {path:'ingia',component:LoginComponent},
         {path:'jisajili-mwananchi',component:RegisterComponent},
         {path:'jisajili-kiongozi',component:RegisterLeaderComponent},
         {path:'tafuta-mtaa', component: TafutaMtaaComponent}
       ]
       },
       {path:'kuhusu', component:KuhusuComponent},
     ]
   },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class KaribuRoutingModule { }
