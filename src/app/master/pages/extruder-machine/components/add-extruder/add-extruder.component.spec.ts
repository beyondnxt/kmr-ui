import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtruderComponent } from './add-extruder.component';

describe('AddExtruderComponent', () => {
  let component: AddExtruderComponent;
  let fixture: ComponentFixture<AddExtruderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExtruderComponent]
    });
    fixture = TestBed.createComponent(AddExtruderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
