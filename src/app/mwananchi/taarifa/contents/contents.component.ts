import {Component, OnInit} from '@angular/core';
import {Ujumbe} from '../../../core/models/ujumbe';
import {UjumbeService} from '../../../core/ujumbe.service';

@Component({
  selector: 'taarifa-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
matangazo: Ujumbe[];
  constructor(private ujumbeService: UjumbeService) {
  }

  getMatangazo(){
    this.ujumbeService.getUjumbes()
      .then(
        res => {
          this.matangazo =res;
          console.log(res);
          console.log('matangazo retrived')
        }
      )
  }

  ngOnInit() {
    this.getMatangazo();
  }

}
