import { TestBed } from '@angular/core/testing';

import { UpperCaseService } from './upper-case.service';

describe('UpperCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpperCaseService = TestBed.get(UpperCaseService);
    expect(service).toBeTruthy();
  });
});
