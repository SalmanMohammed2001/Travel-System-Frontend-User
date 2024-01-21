import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIntroductionComponent } from './main-introduction.component';

describe('MainIntroductionComponent', () => {
  let component: MainIntroductionComponent;
  let fixture: ComponentFixture<MainIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainIntroductionComponent]
    });
    fixture = TestBed.createComponent(MainIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
