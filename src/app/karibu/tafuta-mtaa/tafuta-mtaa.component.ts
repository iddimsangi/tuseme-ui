import { Component, OnInit } from '@angular/core';
import {StreetService } from '../../core/street.service';
import {SessionService} from "../../core/session.service";
import {Street } from '../../core/models/street';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

/* Observable class extensions */
import 'rxjs/add/observable/of';

/* Observable class operators */
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-tafuta-mtaa',
  templateUrl: './tafuta-mtaa.component.html',
  styleUrls: ['./tafuta-mtaa.component.css']
})
export class TafutaMtaaComponent implements OnInit {
  term:any = "";
  items:Street[] =[]
  results:Observable<Street[]>;
  private searchTerms = new Subject<string>();

  constructor(
              private streetService:StreetService,
              private router:Router,
              private sessionService: SessionService,
              ) { }

  /* push search term into observable stream */
  search(term: string):void{
      this.searchTerms.next(term);
      
  }

  gotoStreetDetail(data){
      console.log('some logic to be implemented');
      this.sessionService.setCurrentUser(data);
      this.router.navigateByUrl('/mwananchi/taarifa');
  }

  ngOnInit() {
       this.results = this.searchTerms
      .debounceTime(300)       
      .distinctUntilChanged()   
      .switchMap(term => term   
        ? this.streetService.search(term)
        : Observable.of<Street[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Street[]>([]);
      });

      this.streetService.getStreets()
      .then(res =>{
        this.items =res;
        console.log('streets for search: '+ this.items);
      })

  }

}
