import { TestBed } from '@angular/core/testing';

import { RopeKgLengthService } from './rope-kg-length.service';

describe('RopeKgLengthService', () => {
  let service: RopeKgLengthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopeKgLengthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
