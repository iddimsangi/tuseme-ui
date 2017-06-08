import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import {Street } from './models/street';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StreetService {

private streetUrl = 'http://api.tuseme.co.tz/api/v1/streets';
  constructor(private http:Http) { }

  getStreets():Promise<Street[]>{
    return this.http.get(this.streetUrl)
    .toPromise()
    .then(res=>res.json().data as Street[])
    .catch(this.handleError);
  }

    private handleError(error: any) :Promise<any>{
    console.info('an error has occured');
    return Promise.reject(error.messege || error)
  }

}
