import { Component, OnInit } from '@angular/core';
import {SessionService } from '../../../core/session.service'
import {Street } from '../../../core/models/street';

@Component({
  selector: 'tuma-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
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
