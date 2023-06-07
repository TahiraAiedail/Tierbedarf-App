import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierheimtiereComponent } from './tierheimtiere.component';

describe('TierheimtiereComponent', () => {
  let component: TierheimtiereComponent;
  let fixture: ComponentFixture<TierheimtiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TierheimtiereComponent]
    });
    fixture = TestBed.createComponent(TierheimtiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
