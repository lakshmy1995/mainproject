import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLandingComponent } from './category-landing.component';

describe('CategoryLandingComponent', () => {
  let component: CategoryLandingComponent;
  let fixture: ComponentFixture<CategoryLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
