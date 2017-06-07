import {Component, OnInit} from '@angular/core';
import {Ujumbe} from '../../../core/models/ujumbe';
import {UjumbeService} from '../../../core/ujumbe.service';
import {SessionService } from '../../../core/session.service';

@Component({
  selector: 'taarifa-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
matangazo: Ujumbe[];
  constructor(private ujumbeService: UjumbeService, private sessionService:SessionService) {
  }

  getMatangazo(id:number){
    this.ujumbeService.getStreetUjumbes(id)
      .then(
        res => {
          this.matangazo =res;
          console.log(res);
          console.log('matangazo retrived')
        }
      )
  }

  initialize(){
    let data =this.sessionService.getCurrentUser() 
this.getMatangazo(data.user.street_id);
  }

  ngOnInit() {
    
  }

}
