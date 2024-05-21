import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckBoxComponent } from './custom-check-box.component';

describe('CustomCheckBoxComponent', () => {
  let component: CustomCheckBoxComponent;
  let fixture: ComponentFixture<CustomCheckBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCheckBoxComponent]
    });
    fixture = TestBed.createComponent(CustomCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
