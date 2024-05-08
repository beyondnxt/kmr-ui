import { TestBed } from '@angular/core/testing';

import { SalesLeadService } from './sales-lead.service';

describe('SalesLeadService', () => {
  let service: SalesLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
