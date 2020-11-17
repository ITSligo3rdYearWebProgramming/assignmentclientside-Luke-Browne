import { TestBed } from '@angular/core/testing';

import { CtuService } from './ctu.service';

describe('CtuService', () => {
  let service: CtuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});