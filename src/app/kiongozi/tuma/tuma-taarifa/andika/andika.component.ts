import { Component } from '@angular/core';
import {TaarifaService} from '../../../../core/taarifa.service';
import {Taarifa} from '../../../../core/models/kiongozi';
import {Router} from '@angular/router';

@Component({
  selector: 'app-andika',
  templateUrl: './andika.component.html',
  styleUrls: ['./andika.component.css']
})
export class AndikaComponent {
  submitted = false;
  model: any ;

  constructor(private taarifaService: TaarifaService, private router: Router) { }
  onSubmit() {
    this.submitted = true;
  }
  addTaarifa() {
    this.taarifaService.tumaTaarifa(this.model)
      .then(
        (res) => {
          console.log('updated service works');
          console.log(res);
          // this.router.navigate(['../available']);
          this.router.navigateByUrl('/taarifa/taarifa-zilizotumwa');
        }
      );
  }
}
