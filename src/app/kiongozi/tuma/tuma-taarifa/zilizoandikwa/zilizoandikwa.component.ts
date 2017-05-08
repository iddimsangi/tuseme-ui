import { Component, OnInit } from '@angular/core';
import {Taarifa} from '../../../../core/models/kiongozi';
import {TaarifaService} from '../../../../core/taarifa.service';

@Component({
  selector: 'app-zilizoandikwa',
  templateUrl: './zilizoandikwa.component.html',
  styleUrls: ['./zilizoandikwa.component.css']
})
export class ZilizoandikwaComponent implements OnInit {

  taarifas= [];
  constructor(private taarifaService: TaarifaService) { }



  getTaarifa(): void {
    this.taarifaService.getTaarifa()
      .then(res => {
        {
          this.taarifas = res;
          console.log(this.taarifas);
          console.log('opportunities retrieved');

        }
      });
  }
  ngOnInit() {
    /*this.getTaarifa();*/
  }
}
