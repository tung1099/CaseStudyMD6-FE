import { TestBed } from '@angular/core/testing';

import { AuthencicationService } from './authencication.service';

describe('AuthencicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthencicationService = TestBed.get(AuthencicationService);
    expect(service).toBeTruthy();
  });
});
