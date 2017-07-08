import { Component, OnInit } from '@angular/core';
import {MwananchiService} from '../../../core/mwananchi.service';
import {Mwananchi} from '../../../core/models/mwananchi';

@Component({
  selector: 'app-uratibu-home',
  templateUrl: './uratibu-home.component.html',
  styleUrls: ['./uratibu-home.component.css']
})
export class UratibuHomeComponent implements OnInit {
  wananchi:Mwananchi[]

  constructor(private mwananchiService:MwananchiService) { }

  getWananchi(){
    this.mwananchiService.getWananchi()
    .then(res=>{
      console.log('retrive succsessfully');
      console.log(res);
        this.wananchi = res;
    });
  }

  ngOnInit() {
    this.getWananchi();
  }

}
