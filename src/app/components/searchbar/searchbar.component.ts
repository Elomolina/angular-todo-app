import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado, Empleados, EmpleadosFiltrados } from '../../catalogoService.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent 
{
  busqueda:string = '';
  constructor(private empleados:Empleados, private empleadosFiltrados:EmpleadosFiltrados){}
  emp:Empleado[] = this.empleados.empleado;
  empleadoFiltrado: Empleado[] = [];
  empleado:Empleado = {
    id: 0,
    nombre: '',
    fechaNac: '',
    edad: 0,
    cargo: '',
    estatus: false,
    calcularEdad: function (): number {
      throw new Error('Function not implemented.');
    }
  }
  search(event:any)
  {
    if(event.target.value.length !== 0)
    {
      this.empleadoFiltrado = this.emp.filter(empleado => empleado.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) || empleado.id === parseInt(this.busqueda) || empleado.cargo.toLowerCase().includes(this.busqueda));
      this.empleadosFiltrados.empleadoFiltrado = this.empleadoFiltrado;    
    }
    else 
    {
      alert("a")
      this.empleadosFiltrados.empleadoFiltrado = this.empleados.empleado;
    }
    this.empleadosFiltrados.searchBar();
  }
}
