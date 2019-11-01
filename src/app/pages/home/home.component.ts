import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from '../../components/main-nav/main-nav.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AirService } from 'src/app/services/air.service';
declare var $: any;

export class Airport {
  constructor(public continent: string, public coordinates: string, public elevation_ft: string, public gps_code: string, public iata_code: string, public ident: string, public iso_country: string, public iso_region: string, public local_code: string, public municipality: string, public name: string, public type: string){}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flightsearch: boolean = true;
  carsearch: boolean = false;
  hotelsearch: boolean = false;
  cruisesearch: boolean = false;
  imageSources = [
    'assets/images/background-06.jpg',
    'assets/images/background-08.jpg',
    ];

  minDate = new Date();
  minDate2 = new Date();
  filteredAirports: any;
  filteredToAirports: any;
  flightsForm: FormGroup;
  airportList: any = 
  // [{city:"Mumbai",country:"India",iata:"BOM",airport:"Chhatrapati Shivaji International Airport"},{city:"Delhi",country:"India",iata:"DEL",airport:"Delhi Airport"},{city:"Bangkok",country:"Thailand",iata:"BKK",airport:"Suvarnabhumi Airport"},{city:"Bangalore",country:"India",iata:"BLR",airport:"Bengaluru International Airport"},{city:"Pune",country:"India",iata:"PNQ",airport:"Pune Airport"},{city:"Hyderabad",country:"India",iata:"HYD",airport:"Rajiv Gandhi International Airport"},{city:"Kolkata",country:"India",iata:"CCU",airport:"Netaji Subhash Chandra Bose International Airport"},{city:"Chennai",country:"India",iata:"MAA",airport:"Madras,Chennai International Airport"},{city:"Goa",country:"India",iata:"GOI",airport:"Dabolim Goa International Airport"},{city:"Dubai",country:"United Arab Emirates",iata:"DXB",airport:"Dubai International Airportt"},{city:"Singapore",country:"Singapore",iata:"SIN",airport:"Changi Airport"},{city:"Kathmandu",country:"Nepal",iata:"KTM",airport:"Tribhuvan International Airport"},{city:"Abu Dhabi",country:"United Arab Emirates",iata:"AUH",airport:"Abu Dhabi International Airport"},{city:"Sharjah",country:"United Arab Emirates",iata:"SHJ",airport:"Sharjah International Airport"},{city:"New York",country:"US",iata:"NYC",airport:"All Airports"},{city:"London",country:"United Kingdom",iata:"LON",airport:"All Airports"},{city:"Hong Kong",country:"Hong Kong",iata:"HKG",airport:"Hong Kong International Airport"},{city:"San Francisco",country:"US",iata:"SFO",airport:"San Francisco International Airport"}]
  
  [{"continent": "NA", "coordinates": "-74.93360137939453, 40.07080078125", "elevation_ft": "11", "gps_code": "00A", "iata_code": null, "ident": "00A", "iso_country": "US", "iso_region": "US-PA", "local_code": "00A", "municipality": "Bensalem", "name": "Total Rf Heliport", "type": "heliport"},{"continent": "NA", "coordinates": "-101.473911, 38.704022", "elevation_ft": "3435", "gps_code": "00AA", "iata_code": null, "ident": "00AA", "iso_country": "US", "iso_region": "US-KS", "local_code": "00AA", "municipality": "Leoti", "name": "Aero B Ranch Airport", "type": "small_airport"},{"continent": "NA", "coordinates": "-151.695999146, 59.94919968", "elevation_ft": "450", "gps_code": "00AK", "iata_code": null, "ident": "00AK", "iso_country": "US", "iso_region": "US-AK", "local_code": "00AK", "municipality": "Anchor Point", "name": "Lowell Field", "type": "small_airport"},{"continent": "NA", "coordinates": "-86.77030181884766, 34.86479949951172", "elevation_ft": "820", "gps_code": "00AL", "iata_code": null, "ident": "00AL", "iso_country": "US", "iso_region": "US-AL", "local_code": "00AL", "municipality": "Harvest", "name": "Epps Airpark", "type": "small_airport"},{"continent": "NA", "coordinates": "-91.254898, 35.6087", "elevation_ft": "237", "gps_code": null, "iata_code": null, "ident": "00AR", "iso_country": "US", "iso_region": "US-AR", "local_code": null, "municipality": "Newport", "name": "Newport Hospital & Clinic Heliport", "type": "closed"},{"continent": "NA", "coordinates": "-97.8180194, 34.9428028", "elevation_ft": "1100", "gps_code": "00AS", "iata_code": null, "ident": "00AS", "iso_country": "US", "iso_region": "US-OK", "local_code": "00AS", "municipality": "Alex", "name": "Fulton Airport", "type": "small_airport"}];

  filteredFromOptions: Observable<[]>;
  filteredToOptions: Observable<[]>;

  constructor(private fb: FormBuilder, private airService: AirService) {}

  private _normalizeValue(value: string): string {
    if(value){
      return value.toLowerCase().replace(/\s/g, '');
    }
  }

  private _filterArray(value: string, type: string) {
    if(type == 'from'){
      if (value && typeof value == 'string') {
        const filterValue = this._normalizeValue(value);
        // change airportList with filteredAirports for dynamic data
        return this.airportList.filter((item: any) => this._normalizeValue(item.name).includes(filterValue));
      }
      return this.airportList;
    } else if(type == 'to'){
      if (value && typeof value == 'string') {
        const filterValue = this._normalizeValue(value);
        // change airportList with filteredToAirports for dynamic data
        return this.airportList.filter((item: any) => this._normalizeValue(item.name).includes(filterValue));
      }
      return this.airportList;
    }
    
  }

  ngOnInit() {

    this.flightsForm = this.fb.group({
      fromAirport: [null, [
        Validators.required
      ]],
      fromAirport2: null,
      fromAirport3: null,
      fromAirport4: null,
      fromAirport5: null,
      toAirport: [null, [
        Validators.required
      ]],
      toAirport2: null,
      toAirport3: null,
      toAirport4: null,
      toAirport5: null,
      typeOfFlight: 'round_trip',
      directFlights: null,
      departureDate: [null, [
        Validators.required
      ]],
      departureDate2: null,
      departureDate3: null,
      departureDate4: null,
      departureDate5: null,
      departureDate6: null,
      returnDate: [null, [
        Validators.required
      ]],
      departureDatefh: null,
      returnDatefh: null,
      fromCity: null,
      toCity: null,
      toNearbyAirport: null,
      toNearbyAirport2: null,
      toNearbyAirport3: null,
      toNearbyAirport4: null,
      toNearbyAirport5: null,
      toNearbyAirport6: null,
      fromNearbyAirport2: null,
      fromNearbyAirport3: null,
      fromNearbyAirport4: null,
      fromNearbyAirport5: null,
      fromNearbyAirport: null,
      fromNearbyAirport6: null,
      fromNearbyAirport7: null,
      flightCabin: 'Economy',
      adults: 2,
      children: 0,
      rooms: 1,
    });

    this.filteredFromOptions = this.flightsForm.get('fromAirport')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterArray(value, 'from'))
    );

    this.filteredToOptions = this.flightsForm.get('toAirport')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterArray(value, 'to'))
    );
  }

  hotelTab() {
    this.flightsearch = false;
    this.carsearch = false;
    this.hotelsearch = true;
    this.cruisesearch = false;

  }
  flightTab() {
    this.flightsearch = true;
    this.carsearch = false;
    this.hotelsearch = false;
    this.cruisesearch = false;

  }
  carTab() {
    this.flightsearch = false;
    this.carsearch = true;
    this.hotelsearch = false;
    this.cruisesearch = false;
  }
  cruiseTab() {
    this.flightsearch = false;
    this.carsearch = false;
    this.hotelsearch = false;
    this.cruisesearch = true;
  }

  displayFn(airport: Airport) {
    if (airport) { return airport.name; }
  }
  displayFn2(airport: Airport) {
    if (airport) { return airport.name; }
  }
  
  onDepartureChange(){
    this.flightsForm.controls['returnDate'].setValue("");
    this.minDate2 = new Date(this.flightsForm.value.departureDate);
  }

  onSearchFlight() {

    // typeOfFlight, directFlights, fromAirport, toAirport, flightCabin, departureDate, returnDate, adults, children, 
    console.log('DATA:', this.flightsForm.value);
    this.flightsForm.value.fromAirport = this.flightsForm.value.fromAirport.name;
    this.flightsForm.value.toAirport = this.flightsForm.value.toAirport.name;

    this.flightsForm.value["origin"] = this.flightsForm.value.fromAirport.iata_code;
    this.flightsForm.value["destination"] = this.flightsForm.value.toAirport.iata_code;

    let departureDate = new Date(this.flightsForm.value.departureDate);
    let returnDate = new Date(this.flightsForm.value.returnDate);

    this.flightsForm.value.departureDate = `${departureDate.getFullYear()}-${departureDate.getMonth()}-${departureDate.getDate()}`;
    this.flightsForm.value.returnDate = `${returnDate.getFullYear()}-${returnDate.getMonth()}-${returnDate.getDate()}`

    let queryString = this.airService.jsonToQueryString(this.flightsForm.value);
    // console.log(queryString);

    this.airService.searchFlight(queryString).subscribe(results => {
      this.filteredAirports = results.results;
    });
  }

}
