import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SessionService } from '../../core/session.service';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  currentUser: any = this.sessionService.getCurrentUser();
  user: User = this.currentUser.user;

  constructor(private router: Router, private sessionService: SessionService) { }

  logout(){
    this.router.navigateByUrl('/karibu');
  }
display(){
}
  ngOnInit() {

  }

}
