import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionInTimeComponent } from './transaction-in-time.component';

describe('TransactionInTimeComponent', () => {
  let component: TransactionInTimeComponent;
  let fixture: ComponentFixture<TransactionInTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionInTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionInTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
