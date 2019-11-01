import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from '../../components/main-nav/main-nav.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  imageSources = [
    'assets/images/car-1.jpg',
    ];

  constructor() { }

  ngOnInit() {
  }

}
