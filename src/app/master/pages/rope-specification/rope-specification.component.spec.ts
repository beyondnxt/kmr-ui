import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeSpecificationComponent } from './rope-specification.component';

describe('RopeSpecificationComponent', () => {
  let component: RopeSpecificationComponent;
  let fixture: ComponentFixture<RopeSpecificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeSpecificationComponent]
    });
    fixture = TestBed.createComponent(RopeSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
