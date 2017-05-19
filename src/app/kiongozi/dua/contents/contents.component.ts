import { Component, OnInit } from '@angular/core';
import {PetitionService} from '../../../core/petition.service';
import {Petition} from '../../../core/models/petition';

@Component({
  selector: 'dua-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
malalamiko: Petition[]
  constructor(private petitonService: PetitionService) { }
getMalalamiko(){
    this.petitonService.getMalalamiko()
      .then(
        res => {
          this.malalamiko = res;
        }
      )
}
  ngOnInit() {
  this.getMalalamiko();
  }

}
