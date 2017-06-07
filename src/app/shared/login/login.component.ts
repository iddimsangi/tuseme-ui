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
  loading = false;

  constructor(private authService:AuthService,private router:Router) { }

  login(){
    this.loading = true;
    this.authService.login(this.model)
      .then(
        res => {
          console.info("it works");
          console.info(res);
            if(res[0].role === 2){
              this.router.navigateByUrl('/kiongozi/tuma');
            }
            else if (res[0].role === 1) {

              this.router.navigateByUrl('/mwananchi/taarifa');
            }
        },
        error => {
          console.error(error);
          this.loading = false;
        }
      );
  }
  ngOnInit() {

  }


}
