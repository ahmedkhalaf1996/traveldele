import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cruises',
  templateUrl: './cruises.component.html',
  styleUrls: ['./cruises.component.css']
})
export class CruisesComponent implements OnInit {
  imageSources = [
    'assets/images/sea-1.jpg',
    ];

  constructor() { }

  ngOnInit() {
  }

}
