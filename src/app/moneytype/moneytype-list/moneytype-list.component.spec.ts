import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneytypeListComponent } from './moneytype-list.component';

describe('MoneytypeListComponent', () => {
  let component: MoneytypeListComponent;
  let fixture: ComponentFixture<MoneytypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneytypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneytypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
