import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAddMoneyComponent } from './history-add-money.component';

describe('HistoryAddMoneyComponent', () => {
  let component: HistoryAddMoneyComponent;
  let fixture: ComponentFixture<HistoryAddMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryAddMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAddMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
