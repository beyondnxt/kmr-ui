import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmrBtnComponent } from './kmr-btn.component';

describe('KmrBtnComponent', () => {
  let component: KmrBtnComponent;
  let fixture: ComponentFixture<KmrBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmrBtnComponent]
    });
    fixture = TestBed.createComponent(KmrBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
