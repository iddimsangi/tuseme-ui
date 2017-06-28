import { Component, OnInit } from '@angular/core';
import {UjumbeService } from '../../core/ujumbe.service';
import {Ujumbe} from '../../core/models/ujumbe';

@Component({
  selector: 'app-matangazo',
  templateUrl: './matangazo.component.html',
  styleUrls: ['./matangazo.component.css']
})
export class MatangazoComponent implements OnInit {
 matangazo:Ujumbe[];
  constructor(private ujumbeService:UjumbeService) { }
   getUjumbes(){
              this.ujumbeService.getUjumbes()
              .then(res=>{
                this.matangazo = res;
              })
            }

  ngOnInit() {
     this.getUjumbes();
  }

}
