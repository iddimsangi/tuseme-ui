import {Component, OnInit} from '@angular/core';
import {TaarifaService} from "../../../core/taarifa.service";
import {Taarifa} from "../../../core/models/taarifa";

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
      });

  }

  ngOnInit() {
    this.getAllHeroes();
  }

}
