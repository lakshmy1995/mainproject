import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductHomeComponent } from './admin-product-home.component';

describe('AdminProductHomeComponent', () => {
  let component: AdminProductHomeComponent;
  let fixture: ComponentFixture<AdminProductHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
