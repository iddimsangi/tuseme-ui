import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../../../core/report.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Report} from '../../../../core/models/report';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hariri-ripoti',
  templateUrl: './hariri-ripoti.component.html',
  styleUrls: ['./hariri-ripoti.component.css']
})
export class HaririRipotiComponent implements OnInit {
  report: Report;

  constructor(private reportService: ReportService,
              private router:Router,
              private route:ActivatedRoute ) { }

  getReport(id:number){
    this.reportService.getReport(id)
      .then(
        res => {
          console.log('get report works by id');
          console.info(res);
        }
      )
  }

  update(){
    this.reportService.update(this.report)
      .then(
        res => {
          console.log("update service works");
          this.router.navigateByUrl('/kiongozi/tuma/ripoti/ripoti-zilizotumwa');
        }
      )
  }

  ngOnInit() {

    this.route.params
      .switchMap((params: Params) => this.reportService.getReport(+params['id']))
      .subscribe(res => {
        this.report = res;
        console.log("It works");
        console.log(this.report);
      });
  }

}
