import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicelViewPageComponent } from './vehicel-view-page.component';

describe('VehicelViewPageComponent', () => {
  let component: VehicelViewPageComponent;
  let fixture: ComponentFixture<VehicelViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicelViewPageComponent]
    });
    fixture = TestBed.createComponent(VehicelViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
