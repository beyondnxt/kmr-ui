import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmrTableComponent } from './kmr-table.component';

describe('KmrTableComponent', () => {
  let component: KmrTableComponent;
  let fixture: ComponentFixture<KmrTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmrTableComponent]
    });
    fixture = TestBed.createComponent(KmrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
