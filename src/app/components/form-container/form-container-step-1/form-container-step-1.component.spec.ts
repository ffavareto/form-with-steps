import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerStep1Component } from './form-container-step-1.component';

describe('FormContainerStep1Component', () => {
  let component: FormContainerStep1Component;
  let fixture: ComponentFixture<FormContainerStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContainerStep1Component]
    }).compileComponents();
    
    fixture = TestBed.createComponent(FormContainerStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
