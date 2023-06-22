import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductCategoryComponent } from './admin-product-category.component';

describe('AdminProductCategoryComponent', () => {
  let component: AdminProductCategoryComponent;
  let fixture: ComponentFixture<AdminProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
