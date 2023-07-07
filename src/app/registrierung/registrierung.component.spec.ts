import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registrierungComponent} from './registrierung.component';

describe('registrierungComponent', () => {
  let component: registrierungComponent;
  let fixture: ComponentFixture<registrierungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [registrierungComponent]
    });
    fixture = TestBed.createComponent(registrierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
