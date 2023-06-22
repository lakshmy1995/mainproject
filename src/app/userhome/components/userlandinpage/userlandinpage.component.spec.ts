import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlandinpageComponent } from './userlandinpage.component';

describe('UserlandinpageComponent', () => {
  let component: UserlandinpageComponent;
  let fixture: ComponentFixture<UserlandinpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlandinpageComponent]
    });
    fixture = TestBed.createComponent(UserlandinpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
