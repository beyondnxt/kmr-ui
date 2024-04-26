import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRopeTypeComponent } from './add-rope-type.component';

describe('AddRopeTypeComponent', () => {
  let component: AddRopeTypeComponent;
  let fixture: ComponentFixture<AddRopeTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRopeTypeComponent]
    });
    fixture = TestBed.createComponent(AddRopeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
