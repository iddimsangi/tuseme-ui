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
    "first_name":"Edgar",
    "surname":"Mlowe",
    "birth_day":"2007-02-24",
    "phone_number":"0154982047",
    "email":"edgg@example.com",
    "role":"2",
    "password":"secret",
    "kaya_id":"4"
  };

  constructor(private authService:AuthService,private router:Router) { }

  register(){
    this.authService.create(this.model)
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
