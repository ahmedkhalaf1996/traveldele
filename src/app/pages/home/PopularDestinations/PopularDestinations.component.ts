import { Component, OnInit } from '@angular/core';

import { PopDestService } from './Pop-Service';
import * as moment from 'moment';



@Component({
  selector: 'app-popularDestinations',
  templateUrl: './PopularDestinations.component.html',
  styleUrls: ['./PopularDestinations.component.css']
})
export class PopularDestinationsComponent implements OnInit {

  SelectionCity = 'MAD';
  constructor(public popDestService: PopDestService) {
   }
  ngOnInit() {
    this.popDestService.GetPopDest(this.SelectionCity)
      .subscribe((res) => { console.log('PopDest', res) })


  }

}
