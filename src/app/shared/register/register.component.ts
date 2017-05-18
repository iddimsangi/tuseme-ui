import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any = {
    "first_name":"",
    "surname":"",
    "birth_day":"",
    "phone_number":"",
    "email":"",
    "role":"2",
    "password":"",
    "kaya_id":"4"
  };

  constructor(private authService:AuthService,private router:Router) { }

  register(){
    this.authService.create(this.model)
      .then(
        res => {
          console.info("it works");
          console.info(res);
          this.router.navigateByUrl('/mwananchi/taarifa');
        },
        error => {
          console.error(error);
        }
      );
  }
  ngOnInit() {

  }

}
