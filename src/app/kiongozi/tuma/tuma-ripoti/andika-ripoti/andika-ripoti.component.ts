import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReportService} from '../../../../core/report.service';
import { SessionService } from '../../../../core/session.service';
import {User } from '../../../../core/models/user';

@Component({
  selector: 'app-andika-ripoti',
  templateUrl: './andika-ripoti.component.html',
  styleUrls: ['./andika-ripoti.component.css']
})
export class AndikaRipotiComponent implements OnInit {
  report:any ={
    "title": "",
    "description": "",
    "user_id": "",
    "street_id":""
  };
  loading = false;

  currentUser:any = this.sessionService.getCurrentUser();
  user:User = this.currentUser.user;

  constructor(
    private router:Router,
   private reportService: ReportService,
   private sessionService: SessionService
   ) { }

  create(){
    this.loading = true;
    console.log('the user');
    console.log(this.sessionService.getCurrentUser());
    this.report.user_id =this.user.id;
    this.report.street_id=this.user.street_id;
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
