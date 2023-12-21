import { Component } from '@angular/core';
import { Empleado, Empleados} from '../../catalogoService.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModalEstatusComponent } from '../modal-estatus/modal-estatus.component';
@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet, ModalEstatusComponent],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent 
{
  constructor(private empleados: Empleados){}
  emp:Empleado[] = this.empleados.empleado;
  
  eliminar(id:number)
  {        
    this.empleados.eliminarPorId(id);
    this.emp = this.empleados.empleado
  }
  cambiarEdad(event: Event, id:number)
  {
    let edad:number = 0;
    edad = parseInt((event.target as HTMLInputElement).value);
    this.empleados.modificarEdad(id,edad)
    this.emp = this.empleados.empleado;
  }  
}
