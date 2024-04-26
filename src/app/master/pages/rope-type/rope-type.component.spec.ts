import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeTypeComponent } from './rope-type.component';

describe('RopeTypeComponent', () => {
  let component: RopeTypeComponent;
  let fixture: ComponentFixture<RopeTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeTypeComponent]
    });
    fixture = TestBed.createComponent(RopeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
