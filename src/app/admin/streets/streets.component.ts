import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Street} from '../../core/models/street';
import {StreetService } from '../../core/street.service';

@Component({
  selector: 'app-streets',
  templateUrl: './streets.component.html',
  styleUrls: ['../../../css/sb-admin.css','../../../css/plugins/morris.css','./streets.component.css']
})
export class StreetsComponent implements OnInit {
  streets:Street[];
  model:any={
      name:"testing",
      city:"testing",
      ward:"testing",
      municipal:"testing"
    };

  constructor(private streetService:StreetService,private router:Router) { }

  getStreets(){
    this.streetService.getStreets()
    .then(res=>{
this.streets =res;
    })
  }

  create(){
    this.streetService.createStreet(this.model)
    .then(res=>{
      console.log(res);
      this.streetService.attachStreet({street_id:res.id,admin_id:1})
      .then(att=>{
        console.log('street Attacheched Successfully');
         this.router.navigateByUrl('/admin/mitaa-yote');
      })
    })
  }

  ngOnInit() {
    this.getStreets();
  }

}
