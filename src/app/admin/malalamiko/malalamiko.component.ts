import { Component, OnInit } from '@angular/core';
import {PetitionService} from '../../core/petition.service';
import {Petition} from '../../core/models/petition';

@Component({
  selector: 'app-malalamiko',
  templateUrl: './malalamiko.component.html',
  styleUrls: ['./malalamiko.component.css']
})
export class MalalamikoComponent implements OnInit {
  malalamiko:Petition[];
  constructor( private malalamikoService:PetitionService) { }

   getMalalamiko(){
              this.malalamikoService.getMalalamiko()
              .then(res=>{
                this.malalamiko = res;
              })
            }

  ngOnInit() {
     this.getMalalamiko();
  }

}
