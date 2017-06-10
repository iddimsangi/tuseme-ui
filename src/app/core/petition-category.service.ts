import { Injectable } from '@angular/core';
import {PetitionCategory} from './models/petition-category';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'
import {Url } from './models/url';

@Injectable()
export class PetitionCategoryService {
  url = new Url();
private categoryUrl =`${this.url.onlineUrl}/${'petitionCategories'}`;
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
