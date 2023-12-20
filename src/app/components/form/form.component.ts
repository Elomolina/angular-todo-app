import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Empleado, Empleados, catalogoService } from '../../catalogoService.service';
import { TablaComponent } from '../tabla/tabla.component';

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
  constructor(private catalogo: catalogoService, private emp: Empleados){}
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
      let empleado:Empleado = new Empleado(String(formData.Nombre),String(formData.FechaNac), parseInt(String(formData.Edad)), String(formData.Cargo));
      this.emp.empleado.push(empleado);
      alert("empleado agregado");
      this.empleadosForm.reset();
    }
  }
}
