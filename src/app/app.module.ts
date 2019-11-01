import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AngularFireModule } from '@angular/fire';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule } from '@angular/material';

  import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PopularDestinationsComponent } from './pages/home/PopularDestinations/PopularDestinations.component'
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { CarsComponent } from './pages/cars/cars.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CruisesComponent } from './pages/cruises/cruises.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TermsComponent } from './pages/terms/terms.component';
import { TripsComponent } from './pages/trips/trips.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SecondaryNavComponent } from './components/secondary-nav/secondary-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FrequentFlyerComponent } from './components/frequent-flyer/frequent-flyer.component';
import { PassportsComponent } from './components/passports/passports.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FlightPreferencesComponent } from './components/flight-preferences/flight-preferences.component';
import { TsaComponent } from './components/tsa/tsa.component';
import { AccountNavComponent } from './components/account-nav/account-nav.component';
import { BillingAddressComponent } from './components/billing-address/billing-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MailingAddressComponent } from './components/mailing-address/mailing-address.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularDestinationsComponent,
    AboutComponent,
    AccountComponent,
    CarsComponent,
    ContactComponent,
    CruisesComponent,
    FaqsComponent,
    FlightsComponent,
    HotelsComponent,
    PrivacyComponent,
    ProfileComponent,
    TermsComponent,
    TripsComponent,
    LoginComponent,
    NavigationComponent,
    MainNavComponent,
    SecondaryNavComponent,
    HeaderComponent,
    ChangePasswordComponent,
    FrequentFlyerComponent,
    PassportsComponent,
    PaymentComponent,
    FlightPreferencesComponent,
    TsaComponent,
    AccountNavComponent,
    BillingAddressComponent,
    MailingAddressComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'traveldele-c8f3b'}),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCe930bE0KD9gz-YWU2qksDbUju7vcodBM',
      authDomain: 'traveldele-c8f3b.firebaseapp.com',
      databaseURL: 'https://traveldele-c8f3b.firebaseio.com',
      projectId: 'traveldele-c8f3b',
      storageBucket: 'traveldele-c8f3b.appspot.com',
      messagingSenderId: '407544698049'
    }),
    NgxAuthFirebaseUIModule.forRoot({
     apiKey: "AIzaSyCe930bE0KD9gz-YWU2qksDbUju7vcodBM",
     authDomain: "traveldele-c8f3b.firebaseapp.com",
     databaseURL: "https://traveldele-c8f3b.firebaseio.com",
     projectId: "traveldele-c8f3b",
     storageBucket: "traveldele-c8f3b.appspot.com",
     messagingSenderId: "407544698049"}, null,
      {
        enableFirestoreSync: true,
        toastMessageOnAuthSuccess: true,
        toastMessageOnAuthError: true
      }),
    AppRoutingModule,
    SlideshowModule,
    HttpClientModule,
    LayoutModule,
    CdkTableModule,
CdkTreeModule,
DragDropModule,
MatAutocompleteModule,
MatBadgeModule,
MatBottomSheetModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatCheckboxModule,
MatChipsModule,
MatStepperModule,
MatDatepickerModule,
MatDialogModule,
MatDividerModule,
MatExpansionModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatNativeDateModule,
MatPaginatorModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRadioModule,
MatRippleModule,
MatSelectModule,
MatSidenavModule,
MatSliderModule,
MatSlideToggleModule,
MatSnackBarModule,
MatSortModule,
MatTableModule,
MatTabsModule,
MatToolbarModule,
MatTooltipModule,
MatTreeModule,
ScrollingModule,
OwlDateTimeModule,
OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
