import { TestBed } from '@angular/core/testing';

import { RopeSpecificationService } from './rope-specification.service';

describe('RopeSpecificationService', () => {
  let service: RopeSpecificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopeSpecificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
