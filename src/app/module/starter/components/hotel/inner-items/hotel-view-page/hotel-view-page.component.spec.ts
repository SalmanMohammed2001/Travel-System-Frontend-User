import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelViewPageComponent } from './hotel-view-page.component';

describe('HotelViewPageComponent', () => {
  let component: HotelViewPageComponent;
  let fixture: ComponentFixture<HotelViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelViewPageComponent]
    });
    fixture = TestBed.createComponent(HotelViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
