import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent 
{
  empleadosForm = new FormGroup({
    Nombre: new FormControl("", Validators.required),
    FechaNac : new FormControl("", Validators.required),
    Edad: new FormControl("", Validators.required),
    Cargo: new FormControl("", Validators.required),
    Estatus: new FormControl("", Validators.required)
  });
  onSubmit()
  {
    if(this.empleadosForm.valid)
    {
      console.log("si");
       
    }
  }
}
