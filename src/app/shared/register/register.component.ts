import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";
import {KayaService } from "../../core/kaya.service";
import {StreetService } from "../../core/street.service";
import {Kaya} from '../../core/models/kaya';
import {Street} from '../../core/models/street';
import {SessionService} from "../../core/session.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  kayas:Kaya[];
  streets:Street[]
  loading = false

  model:any = {
  "first_name": "",
  "surname": "",
  "phone_number": "",
  "email": "",
  "birth_day": "",
  "role": 1,
  "password": "",
  "kaya_id": "",
  "street_id":"",
  "remember_token": "string"
};

  constructor(
  private authService:AuthService,
  private router:Router,
  private kayaService:KayaService,
  private streetService:StreetService,
  private sessionService: SessionService
  ) { }

  register(){
    this.loading = true;
    this.authService.create(this.model)
      .then(
        res => {
          console.info("it works");
          console.info(res);
          this.sessionService.setCurrentUser(res);
          this.router.navigateByUrl('/mwananchi/taarifa');
        },
        error => {
          console.error(error);
          this.loading = false;
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

   getStreets(){
this.streetService.getStreets()
.then(res=>{
  this.streets = res;
  console.info('streets retrieved successfully');
  console.info(res);
});
  }

  ngOnInit() {
    this.getKayas();
    this.getStreets();
  }

}
