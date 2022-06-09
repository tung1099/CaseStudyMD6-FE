import { TestBed } from '@angular/core/testing';

import { MoneytypeService } from './moneytype.service';

describe('MoneytypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneytypeService = TestBed.get(MoneytypeService);
    expect(service).toBeTruthy();
  });
});
