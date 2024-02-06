import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBookingComponent } from './save-booking.component';

describe('SaveBookingComponent', () => {
  let component: SaveBookingComponent;
  let fixture: ComponentFixture<SaveBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveBookingComponent]
    });
    fixture = TestBed.createComponent(SaveBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
