import { Component, OnInit } from '@angular/core';
import {UjumbeService} from "../../../../core/ujumbe.service";
import {UjumbeCategory} from "../../../../core/models/ujumbe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-andika-ujumbe',
  templateUrl: './andika-ujumbe.component.html',
  styleUrls: ['./andika-ujumbe.component.css']
})
export class AndikaUjumbeComponent implements OnInit {

  ujumbeCategory:UjumbeCategory[];
  model:any ={
    "title": "string",
    "body": "",
    "user_id": 1,
    "category_id": 1
  };

  constructor(private ujumbeService:UjumbeService,private router:Router) { }

  getCategories(){
    this.ujumbeService.getCategories()
      .then(
        res => {
         this.ujumbeCategory = res;
        }
      )
  }

  addUjumbe(){
    this.ujumbeService.create(this.model)
      .then(
        res => {
          console.log('we are able to post ujumbe');
          this.router.navigateByUrl('/kiongozi/tuma/ujumbe/uliotumwa')

        }
      )
  }

  ngOnInit() {
    this.getCategories();
  }

}
