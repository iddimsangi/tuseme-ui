import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../core/auth.service';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../../css/sb-admin.css','../../../css/plugins/morris.css','./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[];

  constructor(private userService:AuthService) { }

getUsers(){
  this.userService.getUsers()
  .then(res=>{
    console.log(res);
    this.users = res;
  });
}

filterUsers(role:number){
return this.users.filter(x=>x.role ===1)
}


  ngOnInit() {
    this.getUsers();
  }

}
