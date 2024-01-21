import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCustomerReviewsComponent } from './main-customer-reviews.component';

describe('MainCustomerReviewsComponent', () => {
  let component: MainCustomerReviewsComponent;
  let fixture: ComponentFixture<MainCustomerReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCustomerReviewsComponent]
    });
    fixture = TestBed.createComponent(MainCustomerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
