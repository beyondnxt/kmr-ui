import { TestBed } from '@angular/core/testing';

import { RopeMachineService } from './rope-machine.service';

describe('RopeMachineService', () => {
  let service: RopeMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopeMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
