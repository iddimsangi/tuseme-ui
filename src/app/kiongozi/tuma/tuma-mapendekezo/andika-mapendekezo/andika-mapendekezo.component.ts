import { Component, OnInit } from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-andika-mapendekezo',
  templateUrl: './andika-mapendekezo.component.html',
  styleUrls: ['./andika-mapendekezo.component.css']
})
export class AndikaMapendekezoComponent implements OnInit {
inputs:any = [];

mapendekezo:any = {user_id:1,
                    };
model:any =[];
  constructor() { }



  addInputs(){
    this.inputs.splice(-1, 0, {
      'letter': this._randomLetter(),
      'number': this._randomNumber(),
      'value': ''
    });

   for(let data of this.inputs){
     console.info(data);
   }

  }
  removeInputs(){
    this.inputs.splice(-1, 1);
  }

  private _randomLetter(): any
  {
    let letters =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let l:any=letters[this._randomNumber()];
    /*for(let i = 0; i < 10; ++i) {
      l +=letters[this._randomNumber()]
    }*/

    return l;

  }

  private  _randomNumber(): number {
    return Math.floor(Math.random() * 9);
  }
  ngOnInit() {
    for (let i = 0; i < 2; i++){
      this.addInputs();


    }
  }

}
