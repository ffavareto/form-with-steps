import { Routes } from '@angular/router';
import { FormContainerComponent } from './components/form-container/form-container.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'step-1',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FormContainerComponent,
        children: [
            {
                path: 'step-1',
                loadComponent: ()=> import(
                    './components/form-container/form-container-step-1/form-container-step-1.component'
                ).then(c => c.FormContainerStep1Component)
            },
            {
                path: 'step-2',
                loadComponent: ()=> import(
                    './components/form-container/form-container-step-2/form-container-step-2.component'
                ).then(c => c.FormContainerStep2Component)
            },
        ]
    }
];
    