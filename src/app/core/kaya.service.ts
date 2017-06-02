import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Kaya} from './models/kaya';

@Injectable()
export class KayaService {

  private kayaUrl= 'http://api.tuseme.co.tz/api/v1/kayas';

  constructor(private http:Http) { }

  getKayas():Promise<Kaya[]>{
    return this.http.get(this.kayaUrl)
    .toPromise()
    .then( res => res.json().data as Kaya[])
    .catch(this.handleError)
  }

  private handleError(error:any):Promise<any>{
    return Promise.reject(error.message | error);
  }


}
