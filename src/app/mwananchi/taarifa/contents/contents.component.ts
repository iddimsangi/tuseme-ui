import {Component, OnInit} from '@angular/core';
import {Ujumbe} from '../../../core/models/ujumbe';
import {UjumbeService} from '../../../core/ujumbe.service';
import {SessionService } from '../../../core/session.service';
import { User } from '../../../core/models/user'
import {Street} from "../../../core/models/street";

@Component({
  selector: 'taarifa-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
matangazo: Ujumbe[];
  user: any = this.sessionService.getCurrentUser();
  street: Street;
  position: any;
  constructor(private ujumbeService: UjumbeService, private sessionService: SessionService) {
  }

  getMatangazo(id: number){
    this.ujumbeService.getStreetUjumbes(id)
      .then(
        res => {
          this.matangazo = res;
          console.log(res);
          console.log('matangazo retrived');
        }
      );
  }
  getValue() {
    const value = this.sessionService.getCurrentUser();
    this.street = value;
    this.position = value.name;
  }
  ngOnInit() {
    this.getMatangazo(this.user.id);
    this.getValue();
  }

}
