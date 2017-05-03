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
    "phone_number":"0154982047",
    "password":"secret"
  };

  constructor(private authService:AuthService,private router:Router) { }

  login(){
    this.authService.login(this.model)
      .then(
        res => {
          console.info("it works");
          console.info(res);
          this.router.navigateByUrl('/mwananchi');
        },
        error => {
          console.error(error);
        }
      );
  }
  ngOnInit() {

  }


}
