import { Component, OnInit } from '@angular/core';
import {SessionService } from '../../../../core/session.service';
import {Street} from '../../../../core/models/street';

@Component({
  selector: 'app-ripoti-home',
  templateUrl: './ripoti-home.component.html',
  styleUrls: ['./ripoti-home.component.css']
})
export class RipotiHomeComponent implements OnInit {
  street:Street;
  position:any;

  constructor(private sessionService:SessionService) { }

getData(){
let data = this.sessionService.getCurrentUser();
this.street = data.street;
this.position = data.position;
}
  ngOnInit() {
    this.getData();
  }

}
