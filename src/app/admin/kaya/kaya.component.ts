import { Component, OnInit } from '@angular/core';
import {KayaService} from '../../core/kaya.service';
import {Kaya} from '../../core/models/kaya';

@Component({
  selector: 'app-kaya',
  templateUrl: './kaya.component.html',
  styleUrls: ['./kaya.component.css']
})
export class KayaComponent implements OnInit {
    kayas:Kaya[];
    

  constructor( private kayaService:KayaService) { }

   getKayas(){
                this.kayaService.getKayas()
                .then(res=>{
                  this.kayas =res;
                })
            }

  ngOnInit() {
    this.getKayas();
  }

}
