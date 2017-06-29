import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { StreetsComponent } from './streets/streets.component';
import {AllStreetsComponent } from './all-streets/all-streets.component';
import {MatangazoComponent } from './matangazo/matangazo.component';
import {RipotiComponent} from './ripoti/ripoti.component';
import {KayaComponent } from './kaya/kaya.component';
import {MalalamikoComponent} from './malalamiko/malalamiko.component';


const routes: Routes = [
  {path:'',component:AdminComponent,
  children:[
    {path:'', redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent,
      children:[
        {path:'', redirectTo:'matangazo',pathMatch:'full'},
          {path:'matangazo',component:MatangazoComponent},
          {path:'ripoti',component:RipotiComponent},
          {path:'kaya',component:KayaComponent},
          {path:'malalamiko',component:MalalamikoComponent}
      ]
    },
    {path:'watumiaji',component:UsersComponent},
     {path:'sajili-mtaa',component:StreetsComponent},
     {path:'mitaa-yote',component:AllStreetsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
