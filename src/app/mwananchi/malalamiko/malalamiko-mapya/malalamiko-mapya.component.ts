import { Component, OnInit } from '@angular/core';
import {PetitionService} from '../../../core/petition.service';
import {Petition} from '../../../core/models/petition';
import { SessionService } from '../../../core/session.service';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-malalamiko-mapya',
  templateUrl: './malalamiko-mapya.component.html',
  styleUrls: ['./malalamiko-mapya.component.css']
})
export class MalalamikoMapyaComponent implements OnInit {
malalamiko:Petition[];
 user:User = this.sessionService.getCurrentUser().user;

  constructor(private petitionService: PetitionService,private sessionService:SessionService) { }

  getMalalamiko(id:number){
    this.petitionService.getCitizenMalalamiko(id)
      .then(
        res => {
          this.malalamiko = res;
          console.log('can get malalamiko');
          console.log(res);
        }
      );
  }


  ngOnInit() {
    this.getMalalamiko(this.user.id);
  }

}
