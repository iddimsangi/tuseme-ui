import { Component, OnInit } from '@angular/core';
import {UjumbeService} from "../../../../core/ujumbe.service";
import {Ujumbe} from "../../../../core/models/ujumbe";

@Component({
  selector: 'app-ujumbe-uliotumwa',
  templateUrl: './ujumbe-uliotumwa.component.html',
  styleUrls: ['./ujumbe-uliotumwa.component.css']
})
export class UjumbeUliotumwaComponent implements OnInit {
  ujumbes:Ujumbe[];

  constructor(private ujumbeService:UjumbeService) { }

  /*gets ujumbe written by current user */
  getUjumbes(){
    this.ujumbeService.getUjumbes()
      .then(
        res => {
          console.log("we can get ujumbes");
          this.ujumbes = res;
        }
      )
  }

  deleteUjumbe(ujumbe:Ujumbe):void {
    this.ujumbeService.deleteUjumbe(ujumbe.id)
      .then(() => {
      this.ujumbes = this.ujumbes.filter(u => u !== ujumbe);
      console.log("Ujumbe deleted successfully");
      })
  }

  ngOnInit() {
    this.getUjumbes();
  }

}
