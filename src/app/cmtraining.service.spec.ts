import { TestBed } from '@angular/core/testing';

import { CmtrainingService } from './cmtraining.service';

describe('CmtrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmtrainingService = TestBed.get(CmtrainingService);
    expect(service).toBeTruthy();
  });
});
