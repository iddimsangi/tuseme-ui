import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterLeaderComponent } from './register-leader/register-leader.component';
import { HeaderKaribuComponent } from './header-karibu/header-karibu.component';
import { FooterKaribuComponent } from './footer-karibu/footer-karibu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    RegisterComponent,
   LoginComponent,
    RegisterLeaderComponent,
     HeaderKaribuComponent,
      FooterKaribuComponent
      ],
  exports: [
    RouterModule,
    RegisterComponent,
     LoginComponent,
     RegisterLeaderComponent,
     FormsModule,
     HeaderKaribuComponent,
     FooterKaribuComponent
     ]
})
export class SharedModule { }
