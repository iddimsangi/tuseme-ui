import { Component, OnInit } from '@angular/core';
import {Report} from '../../../core/models/report';
import {ReportService} from '../../../core/report.service';
import { SessionService } from '../../../core/session.service';
import { User } from '../../../core/models/user';
import {Street} from "../../../core/models/street";

@Component({
  selector: 'ripoti-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
reports: Report[];
user: User = this.sessionService.getCurrentUser().user;
street: Street;
position: any;
  constructor(private ripotiservice: ReportService, private sessionService: SessionService) { }

  getReports(id: number) {
    return this.ripotiservice.getStreetReports(id)
      .then(
        res => {
          this.reports = res;
          console.log(res);
          console.log('reports retrived');
        }
      );
  }
getInfo() {
    let info = this.sessionService.getCurrentUser();
    this.street = info.street;
    this.position = info.position;
}
  ngOnInit() {
    this.getReports(this.user.street_id);
    this.getInfo();
  }

}
