import { TestBed } from '@angular/core/testing';

import { ExtruderService } from './extruder.service';

describe('ExtruderService', () => {
  let service: ExtruderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtruderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
