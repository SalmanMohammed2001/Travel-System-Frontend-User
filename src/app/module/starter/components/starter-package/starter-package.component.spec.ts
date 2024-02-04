import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterPackageComponent } from './starter-package.component';

describe('StarterPackageComponent', () => {
  let component: StarterPackageComponent;
  let fixture: ComponentFixture<StarterPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarterPackageComponent]
    });
    fixture = TestBed.createComponent(StarterPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
