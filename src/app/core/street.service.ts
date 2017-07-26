import { Injectable } from '@angular/core';
import {Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Street } from './models/street';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Url} from './models/url';

@Injectable()
export class StreetService {
url = new Url();
private headers = new Headers({'Content-Type':'application/json'});

private streetUrl =`${this.url.onlineUrl}/${'streets'}`;
private attachUrl =`${this.url.onlineUrl}/${'streetDetails'}`;
  constructor(private http:Http) { }

  getStreets():Promise<Street[]>{
    return this.http.get(this.streetUrl)
    .toPromise()
    .then(res=>res.json().data as Street[])
    .catch(this.handleError);
  }
  attachStreet(data:any):Promise<any>{
    return this.http.post(this.attachUrl,JSON.stringify(data),{headers:this.headers})
    .toPromise()
    .then(res=>res.json().data as any)
    .catch(this.handleError);
  }
  createStreet(data:any):Promise<Street>{
   return this.http.post(this.streetUrl,JSON.stringify(data),{headers:this.headers})
    .toPromise()
    .then(res=>res.json().data as Street)
    .catch(this.handleError);
  }

    private handleError(error: any) :Promise<any>{
    console.info('an error has occured');
    return Promise.reject(error.messege || error)
  }

  search(term:string):Observable<Street[]>{
    const  url = `${this.url.onlineUrl}/${'search'}/?=${term}`
    return this.http.get(url)
    .map(res => res.json().data as Street[])
  }

}
