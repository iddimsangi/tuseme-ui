import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from "./models/user";


@Injectable()
export class AuthService {

  private registerUrl = 'http://api.tuseme.co.tz/api/v1/users';
  private loginUrl = 'http://api.tuseme.co.tz/api/v1/login';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  create(data): Promise<any> {
    return this.http
      .post(this.registerUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as any )
      .catch(this.handleError);
  }

  login(data): Promise<any> {
    return this.http
      .post(this.loginUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as any )
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
