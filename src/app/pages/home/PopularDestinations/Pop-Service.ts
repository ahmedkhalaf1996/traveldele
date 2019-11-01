import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';


const BACKEND_URL =  'http://localhost:4000/api/v1/';

@Injectable({ providedIn: 'root' })
export class PopDestService {


  constructor(private http: HttpClient)  {
              }

  GetPopDest(city) {

var Year =  moment().format('Y');

var newYear = Math.abs(Number(Year)-2);
var month = moment().format('M');

var currentDate = (newYear+'-'+month);

console.log(currentDate);

const  res =  this.http
   .get(BACKEND_URL + '/get-most-traveled?origin='+city+'&&date='+currentDate );
return res;

  }

}
