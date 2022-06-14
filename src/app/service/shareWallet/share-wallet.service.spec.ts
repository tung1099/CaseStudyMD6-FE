import { TestBed } from '@angular/core/testing';

import { ShareWalletService } from './share-wallet.service';

describe('ShareWalletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareWalletService = TestBed.get(ShareWalletService);
    expect(service).toBeTruthy();
  });
});
