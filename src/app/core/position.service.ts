import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import {Position} from './models/position';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PositionService {

private positionsUrl ='http://api.tuseme.co.tz/api/v1/positions';

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
