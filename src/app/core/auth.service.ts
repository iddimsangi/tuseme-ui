import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from "./models/user";


@Injectable()
export class AuthService {

  private registerUrl = 'http://smartmtaaapi.ga/api/register';
  private loginUrl = 'http://smartmtaaapi.ga/api/login';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  create(data): Promise<User> {
    return this.http
      .post(this.registerUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User )
      .catch(this.handleError);
  }

  login(data): Promise<User> {
    return this.http
      .post(this.loginUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User )
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}