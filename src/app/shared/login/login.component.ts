import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {
    "phone_number":"",
    "password":""
  };

  constructor(private authService:AuthService,private router:Router) { }

  login(){
    this.authService.login(this.model)
      .then(
        res => {
          console.info("it works");
          console.info(res);

            if(res.user.role === 2){
              this.router.navigateByUrl('/kiongozi/tuma');
            }
            else if (res.user.role === 1){

              this.router.navigateByUrl('/mwananchi/taarifa');
            }

        },
        error => {
          console.error(error);
        }
      );
  }
  ngOnInit() {

  }


}
