import { Component } from '@angular/core';
import { Empleado, Empleados} from '../../catalogoService.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, RouterLink, RouterOutlet],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent 
{
  child1Data = { message: 'Hello from Child 1!' };
  child2Data = { message: 'Greetings from Child 2!' };
  estilo:string = '';
  titulo1: string = 'eloo';
  titulo2: string = 'olaaa';
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
