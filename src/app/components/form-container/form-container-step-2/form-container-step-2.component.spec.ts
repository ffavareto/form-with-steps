import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerStep2Component } from './form-container-step-2.component';

describe('FormContainerStep2Component', () => {
  let component: FormContainerStep2Component;
  let fixture: ComponentFixture<FormContainerStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContainerStep2Component]
    }).compileComponents();
    
    fixture = TestBed.createComponent(FormContainerStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
