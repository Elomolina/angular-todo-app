import { Component, Input } from '@angular/core';
import { Empleado, Empleados, catalogoService } from '../../catalogoService.service';

@Component({
  selector: 'app-modal-estatus',
  standalone: true,
  imports: [],
  templateUrl: './modal-estatus.component.html',
  styleUrl: './modal-estatus.component.css'
})
export class ModalEstatusComponent 
{
  constructor(private empleados:Empleados){};
  est:string = '';
  @Input() info:Empleado = {
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
  estatus()
  {
    console.log("pruebita");
    
    console.log(this.info.nombre);
    
    if(this.info.estatus)
    {
      this.est = "activo";
    }
    else 
    {
      this.est = "inactivo";
    }
  }
  cambiarEstatus()
  {
    for(let e of this.empleados.empleado)
    {
      if(e.id === this.info.id)
      {
        if(e.estatus)
        {
          e.estatus = false;
        }
        else 
        {
          e.estatus = true;
        }
      }
    }
    this.estatus();
    console.log(this.empleados.empleado);
    
  }
  
}
