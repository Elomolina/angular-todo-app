import { Component } from '@angular/core';
import { Empleado, Empleados} from '../../catalogoService.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  edad:number = 20;
  constructor(private empleados: Empleados){}
  emp:Empleado[] = this.empleados.empleado;
  
  cambiarEdad(event: Event, id:number)
  {    
    console.log(id);
    
    this.empleados.eliminarPorId(id);
    this.emp = this.empleados.empleado
    for(let e of this.empleados.empleado)
    {
      console.log(e.nombre);
      
    }
  }
}
