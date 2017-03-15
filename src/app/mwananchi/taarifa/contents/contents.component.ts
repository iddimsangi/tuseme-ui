import {Component, OnInit} from '@angular/core';
import {TaarifaService} from "../../../core/taarifa.service";
import {Taarifa} from "../../../shared/taarifa";

@Component({
  selector: 'taarifa-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  taarifas: Taarifa[];

  constructor(private taarifaService: TaarifaService) {
  }

  getAllHeroes(): void {

    this.taarifaService.getAllTaarifas().then(
      response => {

        this.taarifas = response;
        console.log(response);
      });

  }

  ngOnInit() {
    this.getAllHeroes();
  }

}
