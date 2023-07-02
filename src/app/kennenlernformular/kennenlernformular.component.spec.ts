import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KennenlernformularComponent } from './kennenlernformular.component';

describe('KennenlernformularComponent', () => {
  let component: KennenlernformularComponent;
  let fixture: ComponentFixture<KennenlernformularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KennenlernformularComponent]
    });
    fixture = TestBed.createComponent(KennenlernformularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
