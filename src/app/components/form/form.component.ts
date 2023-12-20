import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { catalogoService } from '../../catalogoService.service';
import { TablaComponent } from '../tabla/tabla.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TablaComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent 
{
  catalog: { id: number; descripcion: string; }[] = this.catalogo.cargos;
  constructor(private catalogo: catalogoService)
  {

  }
  empleadosForm = new FormGroup({
    Nombre: new FormControl("", Validators.required),
    FechaNac : new FormControl("", Validators.required),
    Edad: new FormControl("", Validators.required),
    Cargo: new FormControl("", Validators.required),
  });
  onSubmit()
  {
    if(this.empleadosForm.valid)
    {
      const formData = this.empleadosForm.value;
    }
  }
}
