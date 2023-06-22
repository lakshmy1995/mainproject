import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchProductComponent } from './admin-search-product.component';

describe('SearchProductComponent', () => {
  let component: AdminSearchProductComponent;
  let fixture: ComponentFixture<AdminSearchProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSearchProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSearchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
