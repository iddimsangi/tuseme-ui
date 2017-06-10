import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import {Position} from './models/position';
import 'rxjs/add/operator/toPromise';
import {Url } from './models/url';

@Injectable()
export class PositionService {
url = new Url();
private positionsUrl =`${this.url.onlineUrl}/${'positions'}`;

  constructor(private http:Http) { }

getPositions():Promise<Position[]>{
return this.http.get(this.positionsUrl)
.toPromise()
.then(res=> res.json().data as Position[])
.catch(this.handleError);
}

private handleError(error:any){
  return Promise.reject(error.message | error);
}
}
