import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPreferencesComponent } from './flight-preferences.component';

describe('FlightPreferencesComponent', () => {
  let component: FlightPreferencesComponent;
  let fixture: ComponentFixture<FlightPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
