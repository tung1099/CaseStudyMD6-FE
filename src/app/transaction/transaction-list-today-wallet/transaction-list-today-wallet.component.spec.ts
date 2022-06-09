import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListTodayWalletComponent } from './transaction-list-today-wallet.component';

describe('TransactionListTodayWalletComponent', () => {
  let component: TransactionListTodayWalletComponent;
  let fixture: ComponentFixture<TransactionListTodayWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListTodayWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListTodayWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
