import { Component, OnInit } from '@angular/core';
import {Report} from '../../../core/models/report';
import {ReportService} from '../../../core/report.service';

@Component({
  selector: 'app-ripoti-zilizotumwa',
  templateUrl: './ripoti-zilizotumwa.component.html',
  styleUrls: ['./ripoti-zilizotumwa.component.css']
})
export class RipotiZilizotumwaComponent implements OnInit {
reporsts: Report[];
  constructor(private reportService: ReportService) { }

  getReports(){
    this.reportService.getReports()
      .then(
        res => {
          console.info('reports retrived successfully');
          this.reporsts =res;
        }
      );
  }

  ngOnInit() {
    this.getReports();
  }

}
