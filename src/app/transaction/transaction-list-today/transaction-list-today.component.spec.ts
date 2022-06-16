import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListTodayComponent } from './transaction-list-today.component';

describe('TransactionListTodayComponent', () => {
  let component: TransactionListTodayComponent;
  let fixture: ComponentFixture<TransactionListTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
