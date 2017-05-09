import { Component, OnInit } from '@angular/core';
import {UjumbeService} from "../../../../core/ujumbe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Ujumbe, UjumbeCategory} from "../../../../core/models/ujumbe";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-ujumbe-hariri',
  templateUrl: './ujumbe-hariri.component.html',
  styleUrls: ['./ujumbe-hariri.component.css']
})
export class UjumbeHaririComponent implements OnInit {

  ujumbeCategories:UjumbeCategory[];
  model:Ujumbe;


  constructor(private ujumbeService:UjumbeService,
              private router:Router,
              private route:ActivatedRoute
                ) { }

  /*this updates created ujumbe*/
  update(){
    this.ujumbeService.update(this.model)
      .then(
        res => {
          console.log("update service works");
          this.router.navigateByUrl('/kiongozi/tuma/ujumbe/uliotumwa');
        }
      )
  }

  getUjumbeCategories(){
    this.ujumbeService.getCategories()
      .then(
        res => {
          this.ujumbeCategories = res;
        }
      )
  }

  ngOnInit() {
    this.getUjumbeCategories();
    this.route.params
      .switchMap((params: Params) => this.ujumbeService.getUjumbeById(+params['id']))
      .subscribe(ujumbe => {
        this.model = ujumbe;
        console.log("It works");
        console.log(this.model);
      });
  }

}
