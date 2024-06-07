import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRopeMachineComponent } from './add-rope-machine.component';

describe('AddRopeMachineComponent', () => {
  let component: AddRopeMachineComponent;
  let fixture: ComponentFixture<AddRopeMachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRopeMachineComponent]
    });
    fixture = TestBed.createComponent(AddRopeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
