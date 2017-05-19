import { Injectable } from '@angular/core';
import {PetitionCategory} from './models/petition-category';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class PetitionCategoryService {
private categoryUrl = 'http://api.tuseme.co.tz/api/v1/petitionCategories';
  constructor(private http:Http) { }
  getCategories():Promise<PetitionCategory[]>{
    return this.http.get(this.categoryUrl)
      .toPromise()
      .then(res => res.json().data as PetitionCategory[])
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
