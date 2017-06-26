import { Injectable } from '@angular/core';
import {Http,Headers } from '@angular/http';
import {Url } from './models/url';
import {Admin} from './models/admin';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminService {
   url = new Url();

   headers = new Headers({'Content-Type':'application/json'});

  private adminUrl=`${this.url.onlineUrl}/${'adminLogin'}`;
  constructor(private http:Http) { }

  login(data:any):Promise<Admin>{
    return this.http.post(this.adminUrl,JSON.stringify(data),{headers:this.headers})
    .toPromise()
    .then(res=>res.json().data as Admin)
    .catch(this.handleError);
  }

private handleError(error:any):Promise<any>{
  return Promise.reject(error || error.message);
}

}
