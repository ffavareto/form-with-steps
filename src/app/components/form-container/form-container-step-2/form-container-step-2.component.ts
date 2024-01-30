import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from '../form-container.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-container-step-2',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    RouterLink,    
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './form-container-step-2.component.html',
  styleUrl: './form-container-step-2.component.scss'
})
export class FormContainerStep2Component implements OnInit {
  form!: FormGroup;
  formContainer = inject(FormContainerComponent);
  
  ngOnInit(): void {
    this.form = this.formContainer.getStep2Form();
  }
  
  submit(): void {
    const { form } = this.formContainer
    console.log(form.value);
  }
}
  