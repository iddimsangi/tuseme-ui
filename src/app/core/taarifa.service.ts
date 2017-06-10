import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {Taarifa} from "./models/taarifa";
import 'rxjs/add/operator/toPromise';
import {Url} from './models/url';


@Injectable()
export class TaarifaService {
url = new Url();
  private taarifaUrl =`${this.url.onlineUrl}/${'announcements'}`;
  private header = new Headers({'Content-Type': 'application/json'})
  constructor(private http: Http) { }

  create(data ): Promise<Taarifa>{

    return this.http.post(this.taarifaUrl,JSON.stringify(data),{headers: this.header})
      .toPromise()
      .then(res => res.json().data as Taarifa)
      .catch(this.handleError);
  }

  private handleError(error: any) :Promise<any>{
    console.info('an error has occured');
    return Promise.reject(error.messege || error)
  }

}
