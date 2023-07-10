import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungkundeComponent } from './rechnungkunde.component';

describe('RechnungkundeComponent', () => {
  let component: RechnungkundeComponent;
  let fixture: ComponentFixture<RechnungkundeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechnungkundeComponent]
    });
    fixture = TestBed.createComponent(RechnungkundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
