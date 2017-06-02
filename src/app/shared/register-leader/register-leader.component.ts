import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {KayaService} from '../../core/kaya.service';
import {PositionService} from '../../core/position.service';
import {LeaderService} from '../../core/leader.service';
import {User} from '../../core/models/user';
import {Kaya} from '../../core/models/kaya';
import {Position} from '../../core/models/position';
import {Leader} from '../../core/models/leader';
import {Router } from '@angular/router';

@Component({
  selector: 'app-register-leader',
  templateUrl: './register-leader.component.html',
  styleUrls: ['./register-leader.component.css']
})
export class RegisterLeaderComponent implements OnInit {
  kayas:Kaya[];
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
  "kaya_id": 1,
  "remember_token": "string"
};

  constructor(
    private authService:AuthService,
  private router:Router,
  private kayaService:KayaService,
  private positionService:PositionService,
  private leaderService:LeaderService
  ) { }

 register(){
    this.authService.create(this.model)
      .then(
        res => {
          console.info("it can register a leader");
          this.leader.user_id = res.id;
           console.log(res);
          console.log(res.id);
          this.createLeader();
         
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

   getPositions(){
     this.positionService.getPositions()
     .then(res=> {
       console.log("positions retrived successfullty");
       this.positions =res;
     });

   }

createLeader(){
   this.leaderService.create(this.leader)
          .then(res=>{
            console.log('leader created');
             this.router.navigateByUrl('/kiongozi/tuma');
          });
}


  ngOnInit() {
    this.getKayas();
    this.getPositions();
  }

}
