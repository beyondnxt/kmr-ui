import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmrLoaderComponent } from './kmr-loader.component';

describe('KmrLoaderComponent', () => {
  let component: KmrLoaderComponent;
  let fixture: ComponentFixture<KmrLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KmrLoaderComponent]
    });
    fixture = TestBed.createComponent(KmrLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
