import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Empleado, Empleados, catalogoService } from '../../catalogoService.service';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent 
{
  @Input() agregar:string = '';
  @Input() editar:boolean = true;
  @Input() nombre:string = '';
  @Input() editCatalog:boolean = false;
  @Input() empleado:Empleado = {
    id: 0,
    nombre: '',
    fechaNac: '',
    edad: 0,
    cargo: '',
    estatus: false,
    calcularEdad: function (): number {
      throw new Error('Function not implemented.');
    }
  };
  @Input() categorias: { id: number; descripcion: string; }[] = [];
  catalog: { id: number; descripcion: string; }[] = this.catalogo.cargos;
  
  empleadosForm = new FormGroup({
    Nombre: new FormControl("", Validators.required),
    FechaNac : new FormControl("", Validators.required),
    Cargo: new FormControl("", Validators.required)
  });
  
  constructor(private catalogo: catalogoService, private emp: Empleados){}
  onSubmit()
  {
    if(this.empleadosForm.valid)
    {
      if(!this.editar)
      {
        const formData = this.empleadosForm.value;
        let empleado:Empleado = new Empleado(String(formData.Nombre),String(formData.FechaNac), String(formData.Cargo));
        empleado.calcularEdad();
        this.emp.empleado.push(empleado);
        alert("empleado agregado");
        this.empleadosForm.reset();
      }
      else 
      {
        const formData = this.empleadosForm.value;
        for(let e of this.emp.empleado)
        {
           if(e.id === this.empleado.id)
           {
              e.nombre = String(formData.Nombre);
              e.cargo = String(formData.Cargo);
              e.fechaNac = String(formData.FechaNac);
              e.edad = e.calcularEdad();
           }
        }        
      }
    }
  }
}
