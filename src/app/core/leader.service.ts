import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Leader} from './models/leader';
import 'rxjs/add/operator/toPromise';
import {Url } from './models/url';

@Injectable()
export class LeaderService {

url = new Url();
private leaderUrl =`${this.url.onlineUrl}/${'leaders'}`;
private headers = new Headers({'Content-Type':'application/json'});
  constructor(private http:Http) { }

create(data:any):Promise<Leader>{
return this.http.post(this.leaderUrl,JSON.stringify(data),{headers:this.headers})
.toPromise()
.then(res=>res.json().data as Leader)
.catch(this.handleError);
}

private handleError(error:any):Promise<any>{
  return Promise.reject(error.message | error);
}

}
