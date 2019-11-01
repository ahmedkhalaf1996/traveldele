import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from '../../components/main-nav/main-nav.component';
import { PassportsComponent } from '../../components/passports/passports.component';
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';
import { FlightPreferencesComponent } from '../../components/flight-preferences/flight-preferences.component';
import { FrequentFlyerComponent } from '../../components/frequent-flyer/frequent-flyer.component';
import { PaymentComponent } from '../../components/payment/payment.component';
import { MailingAddressComponent } from '../../components/mailing-address/mailing-address.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  personal: boolean = true;
  frequentflyer: boolean = false;
  flightpreferences: boolean = false;
  passports: boolean = false;
  tsa: boolean = false;
  payment: boolean = false;
  password: boolean = false;
  flightsearch: boolean = false;
  email: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
