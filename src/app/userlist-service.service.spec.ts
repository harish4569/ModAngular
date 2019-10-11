import { TestBed } from '@angular/core/testing';

import { UserlistServiceService } from './userlist-service.service';

describe('UserlistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserlistServiceService = TestBed.get(UserlistServiceService);
    expect(service).toBeTruthy();
  });
});
