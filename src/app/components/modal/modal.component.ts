import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent 
{
  @Input() modalTitulo: string = '';
  @Input() modalButton: string = '';
  @Input() modalContenido:string = '';
  @Input() estilo: string = '';
  @Input() idEmpleado:number = 0;
  @Input() data: { message: string } = { message: '' };
}
