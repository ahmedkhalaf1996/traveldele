import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Airport, IAirportResponse, City, ICityResponse } from '../models/airport';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class AirService {
    AirService: any;

    constructor(private http: HttpClient, private connect: ConnectionService) {

    }

    jsonToQueryString(json) {
        return Object.keys(json).map(function(key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(json[key]);
            }).join('&');
    }
    
    searchFlight(data): Observable < IAirportResponse > {
        // console.log('data',data);
        // origin=AAL&destination=DAL&departureDate=2019-10-13
        return this.http.get < IAirportResponse > (this.connect.getDrupalUrl() + `search-flights?${data}` )
            .pipe(
                tap((response: IAirportResponse) => {
                    response.results = response.results
                        .map(airport => new Airport(
                            airport.continent,
                            airport.coordinates,
                            airport.elevation_ft,
                            airport.gps_code,
                            airport.iata_code,
                            airport.ident,
                            airport.iso_country,
                            airport.iso_region,
                            airport.local_code,
                            airport.municipality,
                            airport.name,
                            airport.type
                        ))
                    return response;
                })
            );
    }

}
