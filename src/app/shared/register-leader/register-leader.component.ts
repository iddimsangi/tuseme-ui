import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {PositionService} from '../../core/position.service';
import {LeaderService} from '../../core/leader.service';
import {User} from '../../core/models/user';
import {Position} from '../../core/models/position';
import {Leader} from '../../core/models/leader';
import {Router } from '@angular/router';
import {KayaService } from "../../core/kaya.service";
import {StreetService } from "../../core/street.service";
import {Kaya} from '../../core/models/kaya';
import {Street} from '../../core/models/street';
import {SessionService} from "../../core/session.service";

@Component({
  selector: 'app-register-leader',
  templateUrl: './register-leader.component.html',
  styleUrls: ['./register-leader.component.css']
})
export class RegisterLeaderComponent implements OnInit {
  kayas:Kaya[];
  streets:Street[]
  loading = false;
  leader:any = {
    user_id:"1",
    position_id:"1",
    role:"1"
  }
  positions:Position[];

  model:any = {
  "first_name": "",
  "surname": "",
  "phone_number": "",
  "email": "",
  "birth_day": "",
  "role": 2,
  "password": "",
  "kaya_id": "",
  "street_id":"",
  "remember_token": "string"
};

  constructor(
    private authService:AuthService,
  private router:Router,
  private kayaService:KayaService,
  private positionService:PositionService,
  private leaderService:LeaderService,
   private streetService:StreetService,
    private sessionService: SessionService
  ) { }

 register(){
    this.loading = true;
    this.authService.create(this.model)
      .then(
        res => {
          this.leader.user_id = res.id;
          this.createLeader();

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
});
   }

      getStreets(){
this.streetService.getStreets()
.then(res=>{
  this.streets = res;
});
  }

   getPositions(){
     this.positionService.getPositions()
     .then(res=> {
       console.log('positions why')
       this.positions =res;
       console.log(this.positions)
     });

   }

createLeader(){
   this.leaderService.create(this.leader)
          .then(res=>{
            console.log('leader created');
            this.sessionService.setCurrentUser(res);
             this.router.navigateByUrl('/kiongozi/tuma');
          });
}


  ngOnInit() {
    this.getKayas();
    this.getPositions();
     this.getStreets();
  }

}
