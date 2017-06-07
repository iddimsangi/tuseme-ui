import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Report} from './models/report';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {

  private reportUrl ='http://api.tuseme.co.tz/api/v1/reports';
  private streetReportUrl = 'http://api.tuseme.co.tz/api/v1/streetReports';
  private leaderReportUrl = 'http://api.tuseme.co.tz/api/v1/leaderReports';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  create(data:any): Promise<Report>{
    return this.http.post(this.reportUrl,JSON.stringify(data),{headers: this.headers})
      .toPromise()
      .then(res=> res.json() as Report)
      .catch(this.handleError);
  }

  getReports(): Promise<Report[]>{
    return this.http.get(this.reportUrl)
      .toPromise()
      .then(res=> res.json().data as Report[])
      .catch(this.handleError);
  }

    getStreetReports(id:number): Promise<Report[]>{
      const url = `${this.streetReportUrl}/${id}`
    return this.http.get(url)
      .toPromise()
      .then(res=> res.json().data as Report[])
      .catch(this.handleError);
  }

   getLeaderReports(id:number): Promise<Report[]>{
      const url = `${this.leaderReportUrl}/${id}`
    return this.http.get(url)
      .toPromise()
      .then(res=> res.json().data as Report[])
      .catch(this.handleError);
  }

  getReport(id:number):Promise<Report>{
    const url = `${this.reportUrl}/${id}`
  return  this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Report)
      .catch(this.handleError);
  }

  update(data: Report): Promise<Report> {
    const url = `${this.reportUrl}/${data.id}`;

    return this.http.put(url,JSON.stringify(data),{headers:this.headers})
      .toPromise()
      .then(res => res.json().data as Report)
      .catch(this.handleError)
  }

  deleteReport(id:number):Promise<void> {
    const url = `${this.reportUrl}/${id}`;

    return this.http.delete(url,{headers:this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

 private handleError(error:any): Promise<any>{
    return Promise.reject(error.message || error);
  }

}
