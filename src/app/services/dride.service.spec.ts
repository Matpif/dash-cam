import { TestBed } from '@angular/core/testing';

import { DrideService } from './dride.service';

describe('DrideService', () => {
  let service: DrideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
