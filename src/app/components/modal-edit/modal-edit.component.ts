import { Component, Input } from '@angular/core';
import { Empleado, catalogoService } from '../../catalogoService.service';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-modal-edit',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.css'
})
export class ModalEditComponent 
{
  constructor(private catalogo: catalogoService){}
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
  categorias:{ id: number; descripcion: string; }[] = this.catalogo.cargos;
  categoria()
  {
    this.categorias = this.catalogo.cargos;
    this.categorias = this.categorias.filter(c => c.descripcion !== this.info.cargo)
  }
}
