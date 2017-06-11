import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-karibu',
  templateUrl: './header-karibu.component.html',
  styleUrls: ['./header-karibu.component.css']
})
export class HeaderKaribuComponent implements OnInit {
isIn = false;
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  constructor() { }
  ngOnInit() {
  }

}
