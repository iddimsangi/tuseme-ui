import {Component, OnInit} from '@angular/core';
import {TaarifaService} from "../../../../core/taarifa.service";

@Component({
  selector: 'app-andika',
  templateUrl: './andika.component.html',
  styleUrls: ['./andika.component.css']
})
export class AndikaComponent implements OnInit {
model: any = {
  "user_id": 2,
  "title": "string",
  "description": "string"
};

  constructor(private taarifaService:TaarifaService) { }

  addTaarifa(){
    this.taarifaService.create(this.model)
      .then(res => {
        console.log("the service works");
        console.log(res);
      });
  }


  ngOnInit() {
    this.addTaarifa();
  }
}
