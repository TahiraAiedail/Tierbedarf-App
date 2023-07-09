import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungsuebersichtkundeComponent } from './rechnungsuebersichtkunde.component';

describe('RechnungsuebersichtkundeComponent', () => {
  let component: RechnungsuebersichtkundeComponent;
  let fixture: ComponentFixture<RechnungsuebersichtkundeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechnungsuebersichtkundeComponent]
    });
    fixture = TestBed.createComponent(RechnungsuebersichtkundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
