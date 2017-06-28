import { Component, OnInit } from '@angular/core';
import {User} from "../../../core/models/user";
import {SessionService} from "../../../core/session.service";
import {Street} from "../../../core/models/street";

@Component({
  selector: 'app-malalamiko-home',
  templateUrl: './malalamiko-home.component.html',
  styleUrls: ['./malalamiko-home.component.css']
})
export class MalalamikoHomeComponent implements OnInit {
  user: User = this.sessionService.getCurrentUser().user;
  street: Street;
  constructor(private  sessionService: SessionService) { }
  getData(): void{
    let data = this.sessionService.getCurrentUser();
    this.street = data.street;
  }
  ngOnInit() {
    this.getData();
  }

}
