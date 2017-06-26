import { Component, OnInit } from '@angular/core';
import {Report} from '../../../../core/models/report';
import {ReportService} from '../../../../core/report.service';
import { SessionService } from '../../../../core/session.service';
import { User } from '../../../../core/models/user';

@Component({
  selector: 'app-ripoti-zilizotumwa',
  templateUrl: './ripoti-zilizotumwa.component.html',
  styleUrls: ['./ripoti-zilizotumwa.component.css']
})
export class RipotiZilizotumwaComponent implements OnInit {
  reports: Report[];
  user: User = this.sessionService.getCurrentUser().user;

  constructor(private reportService: ReportService, private sessionService: SessionService) { }

  getReports(id: number) {
    this.reportService.getLeaderReports(id)
      .then(
        res => {
          console.info('reports retrived successfully');
          console.info(res);
          this.reports = res;
        }
      );
  }

  deleteReport(data: Report): void {
    this.reportService.deleteReport(data.id)
      .then(() => {
        this.reports = this.reports.filter(u => u !== data);
        console.log("Ujumbe deleted successfully");
      });
  }


  ngOnInit() {
    this.getReports(this.user.id);
  }

}
