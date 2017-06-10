import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import {Street } from './models/street';
import 'rxjs/add/operator/toPromise';
import {Url} from './models/url';

@Injectable()
export class StreetService {
url = new Url();
private streetUrl =`${this.url.onlineUrl}/${'streets'}`;
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
