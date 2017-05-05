import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Taarifa } from './models/kiongozi';


@Injectable()
export class TaarifaService {

  private taarifaUrl: 'http://smartmtaaapi.ga/api/announcement';
  private  headers = new Headers({'Content-Tpye': 'application/json'});
  constructor(private http: Http) {
  }
 /*the method for posting taarifa
 */
 tumaTaarifa(data): Promise<Taarifa> {
   return this.http
  .post(this.taarifaUrl, JSON.stringify(data), {headers: this.headers})
     .toPromise()
     .then(res => res.json().data as Taarifa)
     .catch(this.handleError);
 }
 /*here comes the method to get data*/
 getTaarifa(): Promise<Taarifa[]> {
   return this.http.get(this.taarifaUrl)
     .toPromise()
     .then(response => response.json().data as Taarifa[])
     .catch(this.handleError);
 }

  private  handleError (error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

