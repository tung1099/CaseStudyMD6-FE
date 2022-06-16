import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumMoneyComponent } from './sum-money.component';

describe('SumMoneyComponent', () => {
  let component: SumMoneyComponent;
  let fixture: ComponentFixture<SumMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
