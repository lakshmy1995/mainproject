import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayprofileComponent } from './displayprofile.component';

describe('DisplayprofileComponent', () => {
  let component: DisplayprofileComponent;
  let fixture: ComponentFixture<DisplayprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayprofileComponent]
    });
    fixture = TestBed.createComponent(DisplayprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
