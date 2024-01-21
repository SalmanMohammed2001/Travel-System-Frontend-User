import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSocialOuterComponent } from './main-social-outer.component';

describe('MainSocialOuterComponent', () => {
  let component: MainSocialOuterComponent;
  let fixture: ComponentFixture<MainSocialOuterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSocialOuterComponent]
    });
    fixture = TestBed.createComponent(MainSocialOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
