import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KennenlernbestaetigungComponent } from './kennenlernbestaetigung.component';

describe('KennenlernbestaetigungComponent', () => {
  let component: KennenlernbestaetigungComponent;
  let fixture: ComponentFixture<KennenlernbestaetigungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KennenlernbestaetigungComponent]
    });
    fixture = TestBed.createComponent(KennenlernbestaetigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
