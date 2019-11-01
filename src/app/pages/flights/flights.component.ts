import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from '../../components/main-nav/main-nav.component';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  imageSources = [

    'assets/images/background-08.jpg',
    ];

    constructor() {
    }

  ngOnInit() {
  }

}
