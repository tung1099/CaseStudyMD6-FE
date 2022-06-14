import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionInTimeByWalletComponent } from './transaction-in-time-by-wallet.component';

describe('TransactionInTimeByWalletComponent', () => {
  let component: TransactionInTimeByWalletComponent;
  let fixture: ComponentFixture<TransactionInTimeByWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionInTimeByWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionInTimeByWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
