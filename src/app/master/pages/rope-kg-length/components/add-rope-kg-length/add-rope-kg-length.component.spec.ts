import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRopeKgLengthComponent } from './add-rope-kg-length.component';

describe('AddRopeKgLengthComponent', () => {
  let component: AddRopeKgLengthComponent;
  let fixture: ComponentFixture<AddRopeKgLengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRopeKgLengthComponent]
    });
    fixture = TestBed.createComponent(AddRopeKgLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
