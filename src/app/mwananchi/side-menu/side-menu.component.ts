import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../../core/models/user";
import {SessionService} from "../../core/session.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  user: User = this.sessionService.getCurrentUser().user;
  constructor(private router: Router, private sessionService: SessionService) { }

  logout(){
    this.router.navigateByUrl('/karibu');
  }
  display(){
  }
  ngOnInit() {

  }

}
