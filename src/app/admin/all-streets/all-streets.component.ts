import { Component, OnInit } from '@angular/core';
import {Street} from '../../core/models/street';
import {StreetService } from '../../core/street.service';

@Component({
  selector: 'app-all-streets',
  templateUrl: './all-streets.component.html',
  styleUrls: ['../../../css/sb-admin.css','../../../css/plugins/morris.css','./all-streets.component.css']
})
export class AllStreetsComponent implements OnInit {
 streets:Street[];
 
  constructor(private streetService:StreetService) { }

  getStreets(){
    this.streetService.getStreets()
    .then(res=>{
this.streets =res;
    })
  }

 

  ngOnInit() {
    this.getStreets();
  }

}
