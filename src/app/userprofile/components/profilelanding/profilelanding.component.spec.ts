import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilelandingComponent } from './profilelanding.component';

describe('ProfilelandingComponent', () => {
  let component: ProfilelandingComponent;
  let fixture: ComponentFixture<ProfilelandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilelandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilelandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
