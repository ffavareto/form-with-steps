import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormStorageDirective } from './directives/form-storage.directive';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, FormStorageDirective],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss'
})
export class FormContainerComponent implements OnInit {
  form!: FormGroup;
  formBuilder = inject(FormBuilder);
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      step1:this.formBuilder.group({
        firstName: '',
        lastName: '',
        birthDate: '',
      }),
      step2:this.formBuilder.group({
        address: '',
        city: '',
      }),
    })
  }

  getStep1Form(): FormGroup {
    return this.form.get('step1') as FormGroup;
  }

  getStep2Form(): FormGroup {
    return this.form.get('step2') as FormGroup;
  }
}
