import {Component, OnInit} from '@angular/core';
import {TaarifaService} from '../../../../core/taarifa.service';
import {Taarifa} from '../../../../core/models/kiongozi';
import {Router} from '@angular/router';

@Component({
  selector: 'app-andika',
  templateUrl: './andika.component.html',
  styleUrls: ['./andika.component.css']
})
export class AndikaComponent implements OnInit {
  submitted = false;
  model: any = {
    user_id: 2,
    title: 'string',
    description: 'string'
  };

  constructor(private taarifaService: TaarifaService, private router: Router) { }
  onSubmit() {
    this.submitted = true;
  }
  addTaarifa() {
    console.log('function is called');
    this.taarifaService.tumaTaarifa(this.model)
      .then(
        (res) => {
          console.log('inside');
        }
      );
  }
  ngOnInit() {
    this.addTaarifa();
  }
}
