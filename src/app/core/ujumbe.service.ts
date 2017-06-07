import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {Ujumbe, UjumbeCategory} from "./models/ujumbe";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UjumbeService {

  /*reques urls*/
  private ujumbeCategoryUrl = 'http://api.tuseme.co.tz/api/v1/ujumbeCategories';
  private ujumbeUrl = 'http://api.tuseme.co.tz/api/v1/ujumbes';
  private streetUjumbe = 'http://api.tuseme.co.tz/api/v1/streetUjumbes';
  private leaderUjumbe = 'http://api.tuseme.co.tz/api/v1/leaderUjumbes';

  /*request headers*/
  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  /* this gets all categories*/
  getCategories(): Promise<UjumbeCategory[]> {
    return this.http.get(this.ujumbeCategoryUrl)
      .toPromise()
      .then(res => res.json().data as UjumbeCategory[])
      .catch(this.handleError)
  }



      /* adds a new Ujumbe*/
  create(data:any): Promise<Ujumbe>{
    return this.http.post(this.ujumbeUrl,JSON.stringify(data),{headers:this.header})
      .toPromise()
      .then(res => res.json().data as Ujumbe)
      .catch(this.handleError)
  }

  /* updates Ujumbe */
  update(data: Ujumbe): Promise<Ujumbe> {
    const url = `${this.ujumbeUrl}/${data.id}`;

    return this.http.put(url,JSON.stringify(data),{headers:this.header})
      .toPromise()
      .then(res => res.json().data as Ujumbe)
      .catch(this.handleError)
  }

  /* gets all Ujumbes */
  getUjumbes(): Promise<Ujumbe[]> {
    return this.http.get(this.ujumbeUrl)
      .toPromise()
      .then(res => res.json().data as Ujumbe[])
      .catch(this.handleError)
  }


  getStreetUjumbes(id:number): Promise<Ujumbe[]> {
    const url =`${this.streetUjumbe}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Ujumbe[])
      .catch(this.handleError)
  }


   getLeaderUjumbes(id:number): Promise<Ujumbe[]> {
    const url =`${this.leaderUjumbe}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Ujumbe[])
      .catch(this.handleError)
  }

  /* gets a specific Ujumbe  by its id */
  getUjumbeById(id:number):Promise<Ujumbe>{
    const url =`${this.ujumbeUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Ujumbe)
      .catch(this.handleError)
  }

  /* deletes a specific Ujumbe by id */
  deleteUjumbe(id:number):Promise<void> {
    const url = `${this.ujumbeUrl}/${id}`;

    return this.http.delete(url,{headers:this.header})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }


  /* Handles all errors*/
  private handleError(error:any){
    console.log('an error has occured');
    return Promise.reject(error.message || error)
  }
}
