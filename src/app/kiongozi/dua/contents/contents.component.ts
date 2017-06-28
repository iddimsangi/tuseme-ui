import { Component, OnInit } from '@angular/core';
import {PetitionService} from '../../../core/petition.service';
import {Petition} from '../../../core/models/petition';
import {SessionService} from "../../../core/session.service";
import {User} from "../../../core/models/user";
import {Street} from "../../../core/models/street";

@Component({
  selector: 'dua-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
malalamiko: Petition[];
  user: User = this.sessionService.getCurrentUser().user;
  /*for position and street detail*/
  street: Street;
  position: any;

  constructor(private petitionService: PetitionService, private sessionService: SessionService) { }
getMalalamiko(id: number) {
    this.petitionService.getStreetMalalamiko(id)
      .then(
        res => {
          this.malalamiko = res;
        }
      );
}
getValue() {
    const value = this.sessionService.getCurrentUser();
    this.street = value.street;
    this.position = value.position;
}
  ngOnInit() {
  this.getMalalamiko(this.user.street_id);
  this.getValue();
  }

}
