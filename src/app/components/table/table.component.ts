import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Empleados, Empleado, EmpleadosFiltrados } from '../../catalogoService.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { ModalEstatusComponent } from '../modal-estatus/modal-estatus.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchbarComponent } from '../searchbar/searchbar.component';
@Component({
    selector: 'app-table',
    standalone: true,
    imports: [MatTableModule, ModalEditComponent, ModalEstatusComponent, SearchbarComponent, MatPaginatorModule],
    templateUrl: './table.component.html',
    styleUrl: './table.component.css'
})
export class TableComponent 
{
    subs: Subscription = new Subscription();
    constructor(private empleados: Empleados, private empleadosFiltrados:EmpleadosFiltrados) { }
    displayedColumns: string[] = ['id', 'nombre', 'edad', 'cargo', 'acciones'];
    emp: Empleado[] = this.empleados.empleado;
    dataSource = new MatTableDataSource<Empleado>(this.emp);
    pageSizeOptions:number[] = [5, 10, 15, 20];
    length:number = this.empleados.empleado.length;
    pageSize:number= 5;
    pageIndex:number = 0;
    ngOnInit() {
        this.subs = this.empleados.obs.subscribe(
            () => { this.actualizarDS()}
        );
        this.subs = this.empleadosFiltrados.obs.subscribe(
            () => {this.actualizarDS()}
        );
    }
    actualizarDS() {
        let response = this.empleadosFiltrados.getEmpleadoFiltrado(this.pageIndex, this.pageSize);
        this.emp = response.content;
        this.dataSource = new MatTableDataSource<Empleado>(this.emp);
        this.length = response.totalElements;
    }
    cambiarEdad(event: Event, id: number) {
        let edad: number = 0;
        edad = parseInt((event.target as HTMLInputElement).value);
        this.empleados.modificarEdad(id, edad)
        this.emp = this.empleados.empleado;
        console.log(this.empleados.empleado);
    }
    eliminar(id: number) {
        this.empleados.eliminarPorId(id);
        this.emp = this.empleados.empleado
    }

    cambiosPaginacion(event:any)
    {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.actualizarDS();
    }

}
