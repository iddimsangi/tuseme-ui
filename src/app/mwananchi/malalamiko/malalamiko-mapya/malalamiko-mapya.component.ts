import { Component, OnInit } from '@angular/core';
import {PetitionService} from '../../../core/petition.service';
import {Petition} from '../../../core/models/petition';

@Component({
  selector: 'app-malalamiko-mapya',
  templateUrl: './malalamiko-mapya.component.html',
  styleUrls: ['./malalamiko-mapya.component.css']
})
export class MalalamikoMapyaComponent implements OnInit {
malalamiko:Petition[];

  constructor(private petitionService: PetitionService) { }

  getMalalamiko(){
    this.petitionService.getMalalamiko()
      .then(
        res => {
          this.malalamiko = res;
          console.log('can get malalamiko');
          console.log(res);
        }
      );
  }


  ngOnInit() {
    this.getMalalamiko();
  }

}
