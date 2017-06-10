import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Kaya} from './models/kaya';
import {Url } from './models/url';

@Injectable()
export class KayaService {
  url = new Url();

  private kayaUrl=`${this.url.onlineUrl}/${'kayas'}`;

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
