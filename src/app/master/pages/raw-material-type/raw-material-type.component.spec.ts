import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialTypeComponent } from './raw-material-type.component';

describe('RawMaterialTypeComponent', () => {
  let component: RawMaterialTypeComponent;
  let fixture: ComponentFixture<RawMaterialTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawMaterialTypeComponent]
    });
    fixture = TestBed.createComponent(RawMaterialTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
