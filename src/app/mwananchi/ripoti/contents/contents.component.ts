import { Component, OnInit } from '@angular/core';
import {Report} from '../../../core/models/report';
import {ReportService} from '../../../core/report.service';

@Component({
  selector: 'ripoti-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
reports: Report[];
  constructor(private ripotiservice: ReportService) { }

  getReports(id:number){
    return this.ripotiservice.getStreetReports(id)
      .then(
        res=> {
          this.reports =res;
          console.log(res);
          console.log('reports retrived')
        }
      )
  }

  ngOnInit() {
    this.getReports(10);
  }

}
