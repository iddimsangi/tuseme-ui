import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Mwananchi} from './models/mwananchi';

@Injectable()
export class MwananchiService {

  private mwananchiUrl='http://localhost:8000/api/v1/users';

  constructor(private http:Http) { }

  getWananchi():Promise<Mwananchi[]>{
  return  this.http.get(this.mwananchiUrl)
    .toPromise()
    .then(res=>res.json().data as Mwananchi[])
    .catch(this.handleError);
  }

  private handleError(error:any):Promise<any>{
    return Promise.reject(error || error.message);
  }

}
