import { Component, OnInit } from '@angular/core';
import {SessionService } from '../../../../core/session.service';
import {Street } from '../../../../core/models/street';

@Component({
  selector: 'app-ujumbe-home',
  templateUrl: './ujumbe-home.component.html',
  styleUrls: ['./ujumbe-home.component.css']
})
export class UjumbeHomeComponent implements OnInit {
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
