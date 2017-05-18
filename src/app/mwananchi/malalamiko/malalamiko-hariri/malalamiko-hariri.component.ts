import { Component, OnInit } from '@angular/core';
import {Petition} from '../../../core/models/petition';
import {PetitionCategory} from '../../../core/models/petition-category';
import {PetitionCategoryService} from '../../../core/petition-category.service';
import {PetitionService} from '../../../core/petition.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-malalamiko-hariri',
  templateUrl: './malalamiko-hariri.component.html',
  styleUrls: ['./malalamiko-hariri.component.css']
})
export class MalalamikoHaririComponent implements OnInit {
  malalamiko: Petition[];
  model: any ={};
  petitionCategories: PetitionCategory[];
  constructor(
    private petitionCategoryService: PetitionCategoryService,
    private petitionService: PetitionService,
    private router: Router,
    private route:ActivatedRoute
  ) { }
  getCategories(){
    this.petitionCategoryService.getCategories()
      .then(
        res => {
          this.petitionCategories = res;
          console.log('categories retrived already');
          console.log(this.petitionCategories);
        }
      )
  }

  update(){
    this.petitionService.create(this.model)
      .then(
        res => {
          this.router.navigateByUrl('/mwananchi/dua/zote');
        }
      );
  }



  ngOnInit(){
    this.getCategories()
    this.route.params
      .switchMap((params: Params) => this.petitionService.getLalamiko(+params['id']))
      .subscribe(res => {
        this.model = res;
        console.log("It works");
        console.log(this.model);
      });
  }
}
