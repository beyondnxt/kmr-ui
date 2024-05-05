import { TestBed } from '@angular/core/testing';

import { MainCustomerService } from './main-customer.service';

describe('MainCustomerService', () => {
  let service: MainCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
