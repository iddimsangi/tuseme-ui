import { Component, OnInit } from '@angular/core';
import {Report} from '../../../../core/models/report';
import {ReportService} from '../../../../core/report.service';

@Component({
  selector: 'app-ripoti-zilizotumwa',
  templateUrl: './ripoti-zilizotumwa.component.html',
  styleUrls: ['./ripoti-zilizotumwa.component.css']
})
export class RipotiZilizotumwaComponent implements OnInit {
  reports: Report[];
  constructor(private reportService: ReportService) { }

  getReports(){
    this.reportService.getReports()
      .then(
        res => {
          console.info('reports retrived successfully');
          console.info(res);
          this.reports =res;
        }
      );
  }

  deleteReport(data:Report):void {
    this.reportService.deleteReport(data.id)
      .then(() => {
        this.reports = this.reports.filter(u => u !== data);
        console.log("Ujumbe deleted successfully");
      })
  }

  ngOnInit() {
    this.getReports();
  }

}
