import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';





const BACKEND_URL =  'http://localhost:4000/api/v1/';







@Injectable({ providedIn: 'root' })
export class HotelsService {

  //Account: Observable<Account>;

  constructor(private http: HttpClient)  {
              }




  GetHotel(data) {
  // await this.http.get(BACKEND_URL + '/get-hotele-by-city?cityCode=' + data ).subscribe(
  //    (response) => {
  //     console.log(response);
  //    }
  //  )
 // api/v1/search-hotels?cityCode=NYC&checkInDate=2019-11-15&checkOutDate=2019-11-19&roomQuantity=1&adults=2

 // ?cityCode=NYC&checkInDate=2019-11-15
 //&checkOutDate=2019-11-19&roomQuantity=1&adults=2


console.log(data);


    //  const  res =  this.http.
    //  get(BACKEND_URL + `/search-hotels?cityCode=NYC&checkInDate=2019-11-15&checkOutDate=2019-11-19&roomQuantity=1&adults=2`
    //   );
    //  return res;
    //'${data.cityCode}&checkInDate=${data.checkInDate}
    //&checkOutDate=${data.checkOutDate}&roomQuantity=${data.RoomQ}&adults=${data.Adults}'

   //console.log(String(data.rooms))

    const  res =  this.http.
     // get(BACKEND_URL + `/search-hotels?cityCode=NYC&checkInDate=2019-11-15&checkOutDate=2019-11-19&roomQuantity=1&adults=2`
    get(BACKEND_URL + 'search-hotels?cityCode=' + data.cityCode + '&checkInDate=' + String( data.arr ) + '&checkOutDate=' + String( data.lea) + '&roomQuantity=' + String( data.rooms) + '&adults=' + String( data.Adults )
     );
      return res;
  }






}
