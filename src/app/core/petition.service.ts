import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Petition} from './models/petition';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class PetitionService {

  private petitionUrl = 'http://api.tuseme.co.tz/api/v1/petitions';
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(private http: Http) { }

  create(data:any): Promise<Petition>{
    return this.http.post(this.petitionUrl,JSON.stringify(data),{headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Petition)
      .catch(this.handleError);
  }

  getMalalamiko(): Promise<Petition[]>{
    return this.http.get(this.petitionUrl)
      .toPromise()
      .then(res => res.json().data as Petition[])
      .catch(this.handleError);
  }

  getLalamiko(id:number):Promise<Petition>{
    const url = `${this.petitionUrl}/${id}`
    return  this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Petition)
      .catch(this.handleError);
  }

  deleteLalamiko(id:number):Promise<void> {
    const url = `${this.petitionUrl}/${id}`;

    return this.http.delete(url,{headers:this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  update(data: Petition): Promise<Petition> {
    const url = `${this.petitionUrl}/${data.id}`;

    return this.http.put(url,JSON.stringify(data),{headers:this.headers})
      .toPromise()
      .then(res => res.json().data as Petition)
      .catch(this.handleError)
  }

  private handleError(error:any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
