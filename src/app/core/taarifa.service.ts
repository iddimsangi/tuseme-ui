import {Injectable} from '@angular/core';

/* modules and operators for http service */
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

/* importing class for Taarifa Objects */
import {Taarifa} from '../shared/taarifa';


@Injectable()
export class TaarifaService {

  private taarifaUrl = 'http://localhost:8000/api/v1/announcements';


  constructor(private http: Http) {
  }

  getAllTaarifas(): Promise<Taarifa[]> {

    return this.http.get(this.taarifaUrl)
      .toPromise()
      .then(response => response.json().data as Taarifa[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
