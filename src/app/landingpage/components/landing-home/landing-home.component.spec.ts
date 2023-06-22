import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeComponent } from './landing-home.component';

describe('LandingHomeComponent', () => {
  let component: LandingHomeComponent;
  let fixture: ComponentFixture<LandingHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingHomeComponent]
    });
    fixture = TestBed.createComponent(LandingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
