import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../core/report.service';
import {Report} from '../../core/models/report';

@Component({
  selector: 'app-ripoti',
  templateUrl: './ripoti.component.html',
  styleUrls: ['./ripoti.component.css']
})
export class RipotiComponent implements OnInit {
  reports:Report[];

  constructor(private riportService:ReportService) { }

   getReports(){
                this.riportService.getReports()
                .then(res=>{
                  this.reports = res;
                })
            }

  ngOnInit() {
     this.getReports();
  }

}
