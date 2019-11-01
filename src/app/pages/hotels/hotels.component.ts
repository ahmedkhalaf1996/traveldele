import { Component, OnInit } from '@angular/core';

import { HotelsService } from './hotels-service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {


  imageSources = [

    'assets/images/background-08.jpg',
    ];

    isLoading = false;

    IsSearch = false;

    whenSerach = false;

    countries = [
    {name:"New York", code:"NYC"},
    {name:"MAD", code:"MAD"},
    {name:"London", code:"LON"},
    {name:"Sydney", code:"SYD"},
    {name:"Nice", code:"NCE"},
    {name:"Bangkok", code:"BKK"},
    { name: "berline", code: "BER" },
    ];

    RatingArr = [1,2,3,4,5];


    Rating:Number  = 5;
    nextrate :Number = 0;
    counter = Array;



    SelectionCity:any;
    Adults: Number = 1;

    CheckInData:  any;
    CheckOutData: any;
    RoomQ: Number = 1;



   ResuldDatat:any=[];

 constructor(public hotelsService: HotelsService) {
  // this.nextrate = Math.abs(  Number(this.Rating) - 5 );
  // this.Rating = Math.abs(  Number(this.nextrate) - 5 );
}

  ngOnInit() {

  }


  // changeRating(){
  //   this.nextrate = Math.abs(  (Number(this.Rating)) - 5 );
  //   this.Rating = (Number(this.Rating));
  // }

  SubmitData(){
    this.IsSearch = true;
    this.whenSerach = true;
    this.isLoading = true;

     const Data = {
       cityCode : this.SelectionCity,
       Adults : this.Adults,
       arr: this.CheckInData,
       lea: this.CheckOutData,
       rooms: this.RoomQ
     }


    this.hotelsService.GetHotel(Data).subscribe(
      (res) => {
        for (let index = 0; index < res['data'].length; index++) {
          const element = res['data'][index];
          const rating = Number(element.hotel.rating);
          console.log('ra',rating);

          if(element.hotel.description) {
            element.hotel.description.text =  element.hotel.description.text.substr(0, 400);
          }

        for (let index = 0; index < element.offers.length; index++) {
          const el = element.offers[index];
          console.log(el.guests.adults);
          const off = Number(el.guests.adults);

          if( this.Adults == off ){
             this.ResuldDatat.push(element);
            }
        }
        }
         this.whenSerach = false;
         this.isLoading = false;
         console.log(this.ResuldDatat);
      });



    // this.hotelsService.GetHotel(Data).subscribe(
    //   (res) => {
    //     for (let index = 0; index < res['data'].length; index++) {
    //       const element = res['data'][index];
    //       const rating = Number(element.hotel.rating);
    //       console.log('ra',rating);

    //     for (let index = 0; index < element.offers.length; index++) {
    //       const el = element.offers[index];
    //       console.log(el.guests.adults);
    //       const off = Number(el.guests.adults);

    //       if(this.Rating == rating && this.Adults == off  ){
    //         this.ResuldDatat.push(element);
    //       }
    //     }
    //     }
    //      this.whenSerach = false;
    //      this.isLoading = false;
    //      console.log(this.ResuldDatat);
    //   });



  }

  NewRating(data){
     console.log(data, 'next',  Math.abs((Number(data))-5));
     this.Rating = data;
     this.nextrate =  Math.abs((Number(data))-5);
    //  // start with rating
    //  const arr = this.ResuldDatat;
    //  for (let index = 0; index < arr.length; index++) {
    //    const i = index;
    //    const element =  arr[index];
    //    const rating = Number(element.hotel.rating);

    //  for (let index = 0; index < element.offers.length; index++) {
    //    if(this.Rating !== rating ){
    //     this.ResuldDatat.splice(element);
    //   }
    //  }

    //  }

  }

  NewRating2(data){
    console.log(data + this.Rating, 'next' ,  Math.abs((Number(data + this.Rating))-5));
    const next = data + this.Rating;
    this.nextrate = Math.abs((Number(next))-5);
    this.Rating = next;




  }

}



