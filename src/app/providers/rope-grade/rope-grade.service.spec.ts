import { TestBed } from '@angular/core/testing';

import { RopeGradeService } from './rope-grade.service';

describe('RopeGradeService', () => {
  let service: RopeGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopeGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
