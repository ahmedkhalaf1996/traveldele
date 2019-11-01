import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentFlyerComponent } from './frequent-flyer.component';

describe('FrequentFlyerComponent', () => {
  let component: FrequentFlyerComponent;
  let fixture: ComponentFixture<FrequentFlyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentFlyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
