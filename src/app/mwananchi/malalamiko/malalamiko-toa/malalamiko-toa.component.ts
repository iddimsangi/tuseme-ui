import { Component, OnInit } from '@angular/core';
import {PetitionCategory} from '../../../core/models/petition-category';
import {PetitionCategoryService} from '../../../core/petition-category.service';
import {PetitionService} from '../../../core/petition.service';
import {Router} from '@angular/router';
import {Petition} from '../../../core/models/petition';

@Component({
  selector: 'app-malalamiko-toa',
  templateUrl: './malalamiko-toa.component.html',
  styleUrls: ['./malalamiko-toa.component.css']
})
export class MalalamikoToaComponent implements OnInit {
  malalamiko: Petition[];
  model: any ={
    user_id:1,
    title:"",
    description: "",
    petition_category_id: 2
  };
  petitionCategories: PetitionCategory[];
  constructor(
    private petitionCategoryService: PetitionCategoryService,
    private petitionService: PetitionService,
    private router: Router
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

  create(){
    this.petitionService.create(this.model)
      .then(
        res => {
          this.router.navigateByUrl('/mwananchi/dua/zote');
        }
      );
  }

  getMalalamiko(){
  this.petitionService.getMalalamiko()
    .then(
      res => {
        this.malalamiko = res;

      }
    );
  }

  deleteLalamiko(data:Petition):void {
    this.petitionService.deleteLalamiko(data.id)
      .then(() => {
        this.malalamiko = this.malalamiko.filter(u => u !== data);
        console.log("Ujumbe deleted successfully");
      })
  }

  ngOnInit() {
    this.getCategories();
    this.getMalalamiko();
  }

}
