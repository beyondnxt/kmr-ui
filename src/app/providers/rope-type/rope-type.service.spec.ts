import { TestBed } from '@angular/core/testing';

import { RopeTypeService } from './rope-type.service';

describe('RopeTypeService', () => {
  let service: RopeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopeTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
