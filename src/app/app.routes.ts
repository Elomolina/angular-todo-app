import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    {
        path:'agregarEmpleados',
        component: FormComponent
    },
    {
        path:'**',
        redirectTo: 'agregarEmpleados'
    }
];
