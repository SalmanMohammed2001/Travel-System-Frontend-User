import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackaeViewPageComponent } from './packae-view-page.component';

describe('PackaeViewPageComponent', () => {
  let component: PackaeViewPageComponent;
  let fixture: ComponentFixture<PackaeViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackaeViewPageComponent]
    });
    fixture = TestBed.createComponent(PackaeViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
