import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneyInTimeByWalletComponent } from './add-money-in-time-by-wallet.component';

describe('AddMoneyInTimeByWalletComponent', () => {
  let component: AddMoneyInTimeByWalletComponent;
  let fixture: ComponentFixture<AddMoneyInTimeByWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoneyInTimeByWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoneyInTimeByWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
