import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeMachineComponent } from './rope-machine.component';

describe('RopeMachineComponent', () => {
  let component: RopeMachineComponent;
  let fixture: ComponentFixture<RopeMachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeMachineComponent]
    });
    fixture = TestBed.createComponent(RopeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
