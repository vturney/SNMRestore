import { TestBed } from '@angular/core/testing';

import { RestoreRestService } from './restore-rest.service';

describe('RestoreRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestoreRestService = TestBed.get(RestoreRestService);
    expect(service).toBeTruthy();
  });
});
