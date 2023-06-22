import { TestBed } from '@angular/core/testing';

import { AllproductsService } from './allproducts.service';

describe('AllproductsService', () => {
  let service: AllproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
