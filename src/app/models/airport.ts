export class Airport {
  constructor(public continent: string, public coordinates: string, public elevation_ft: string, public gps_code: string, public iata_code: string, public ident: string, public iso_country: string, public iso_region: string, public local_code: string, public municipality: string, public name: string, public type: string){}
}

export interface IAirportResponse {
  results: Airport[];
}
export interface ICityResponse {
  results: City[];
}

export class City {
  constructor(public iata_code: string,public iso_country: string, public iso_region: string, public municipality: string, public name: string, public type: string){}
}
