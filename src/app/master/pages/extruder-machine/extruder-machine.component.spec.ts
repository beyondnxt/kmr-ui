import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtruderMachineComponent } from './extruder-machine.component';

describe('ExtruderMachineComponent', () => {
  let component: ExtruderMachineComponent;
  let fixture: ComponentFixture<ExtruderMachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtruderMachineComponent]
    });
    fixture = TestBed.createComponent(ExtruderMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
