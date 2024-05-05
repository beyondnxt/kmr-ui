import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeKgLengthComponent } from './rope-kg-length.component';

describe('RopeKgLengthComponent', () => {
  let component: RopeKgLengthComponent;
  let fixture: ComponentFixture<RopeKgLengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeKgLengthComponent]
    });
    fixture = TestBed.createComponent(RopeKgLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
