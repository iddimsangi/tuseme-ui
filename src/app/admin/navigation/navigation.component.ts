import { Component, OnInit } from '@angular/core';
import {SessionService } from '../../core/session.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../../../css/sb-admin.css','../../../css/plugins/morris.css','./navigation.component.css']
})
export class NavigationComponent implements OnInit {

user:any;
  constructor(private sessionService:SessionService) { }

  getCurrentUser(){
   this.user = this.sessionService.getCurrentUser()
  }

  ngOnInit() {
    this.getCurrentUser();
  }

}
