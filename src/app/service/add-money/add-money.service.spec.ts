import { TestBed } from '@angular/core/testing';

import { AddMoneyService } from './add-money.service';

describe('AddMoneyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMoneyService = TestBed.get(AddMoneyService);
    expect(service).toBeTruthy();
  });
});
