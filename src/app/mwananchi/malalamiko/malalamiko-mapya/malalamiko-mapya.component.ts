import { Component, OnInit } from '@angular/core';
import {PetitionService} from '../../../core/petition.service';
import {Petition} from '../../../core/models/petition';
import { SessionService } from '../../../core/session.service';
import { User } from '../../../core/models/user';
import {Street} from "../../../core/models/street";

@Component({
  selector: 'app-malalamiko-mapya',
  templateUrl: './malalamiko-mapya.component.html',
  styleUrls: ['./malalamiko-mapya.component.css']
})
export class MalalamikoMapyaComponent implements OnInit {
malalamiko: Petition[];
 user: User = this.sessionService.getCurrentUser();
 street: Street;
  constructor(private petitionService: PetitionService, private sessionService: SessionService) { }

  // getMalalamiko(id: number) {
  //   this.petitionService.getStreetMalalamiko(id)
  //     .then(
  //       res => {
  //         this.malalamiko = res;
  //         console.log('can get malalamiko');
  //         console.log(res);
  //       }
  //     );
  // }
  getMalalamiko(id: number) {
    this.petitionService.getStreetMalalamiko(id)
      .then(
        res => {
          this.malalamiko = res;
        }
      );
  }
/*the information of the street*/
getInfo(){
  let info = this.sessionService.getCurrentUser();
 this.street = info;
}

  ngOnInit() {
    this.getMalalamiko(this.user.id);
    this.getInfo();
  }

}
