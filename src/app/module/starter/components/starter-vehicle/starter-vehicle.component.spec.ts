import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterVehicleComponent } from './starter-vehicle.component';

describe('StarterVehicleComponent', () => {
  let component: StarterVehicleComponent;
  let fixture: ComponentFixture<StarterVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarterVehicleComponent]
    });
    fixture = TestBed.createComponent(StarterVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
