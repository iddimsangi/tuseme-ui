import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";
import {KayaService } from "../../core/kaya.service";
import {Kaya} from '../../core/models/kaya';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  kayas:Kaya[];

  model:any = {
  "first_name": "",
  "surname": "",
  "phone_number": "",
  "email": "",
  "birth_day": "",
  "role": 1,
  "password": "",
  "kaya_id": 1,
  "remember_token": "string"
};

  constructor(private authService:AuthService,private router:Router,private kayaService:KayaService) { }

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

  getKayas(){
this.kayaService.getKayas()
.then(res=>{
  this.kayas = res;
  console.info('kayas retrieved successfully');
  console.info(res);
});
  }

  ngOnInit() {
    this.getKayas();
  }

}
