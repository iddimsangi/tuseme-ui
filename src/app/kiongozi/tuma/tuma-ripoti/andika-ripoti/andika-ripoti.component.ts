import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReportService} from '../../../../core/report.service';

@Component({
  selector: 'app-andika-ripoti',
  templateUrl: './andika-ripoti.component.html',
  styleUrls: ['./andika-ripoti.component.css']
})
export class AndikaRipotiComponent implements OnInit {
  report:any ={
    "title": "",
    "description": "",
    "user_id": 1
  };

  constructor(private router:Router, private reportService: ReportService) { }

  create(){
    this.reportService.create(this.report)
      .then(
        res => {
         this.router.navigateByUrl('/kiongozi/tuma/ripoti/ripoti-zilizotumwa');
        }
      );
  }

  ngOnInit() {

  }

}
