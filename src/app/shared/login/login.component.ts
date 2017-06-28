import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";
import {SessionService} from "../../core/session.service";
import { AdminService } from '../../core/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {
    "phone_number": '',
    "password": ''
  };
  loading = false;
  message:string;

  constructor(
              private authService: AuthService,
               private router: Router,
                private sessionService: SessionService,
                private adminService:AdminService
              ) { }

  login() {
    this.loading = true;
    this.authService.login(this.model)
      .then(res => {this.sessionService.setCurrentUser(res);
          this.sessionService.setCurrentUser(res);
            if(res.user.role === 2){
              this.router.navigateByUrl('/kiongozi/tuma');
            }
            else if (res.user.role === 1) {

              this.router.navigateByUrl('/mwananchi/taarifa');
            }
        },
        error => {
          //try to login admin
          this.loginAdmin(this.model);
        }
      );
  }
  loginAdmin(data:any){
      this.adminService.login(data)
      .then(res=>{
        console.log('admin has loged in successfully');
        console.log(res);
        this.router.navigateByUrl('/admin');
      }, error=>{
        console.log('an error has occured');
        console.log(error);
        this.loading = false;
        this.message = 'umekosea! jaribu tena kwa namba ya simu na neno siri sahihi';
      });
  }
  ngOnInit() {
  }


}