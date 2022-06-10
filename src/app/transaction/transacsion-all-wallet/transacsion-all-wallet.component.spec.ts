import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacsionAllWalletComponent } from './transacsion-all-wallet.component';

describe('TransacsionAllWalletComponent', () => {
  let component: TransacsionAllWalletComponent;
  let fixture: ComponentFixture<TransacsionAllWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacsionAllWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacsionAllWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
