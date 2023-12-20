import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class catalogoService 
{
    cargos = 
    [
        {
            "id":1,
            "descripcion": "Gerente"
        },
        {
            "id":2,
            "descripcion": "Coordinador"
        },
        {
            "id":3,
            "descripcion": "Subdirector"
        }
    ]
}
export class Empleados 
{
    empleado:Empleado[] = [];
    getEmpleado():Empleado[]
    {
        return this.empleado;
    }
}
export class Empleado 
{
    id:number = 0;
    nombre:string = '';
    fechaNac:string = '';
    edad:number = 0;
    cargo:string = '';
    estatus:boolean = true;
    constructor(nombre:string, fechaNac:string, edad:number, cargo:string)
    {
        this.nombre = nombre; 
        this.fechaNac = fechaNac; 
        this.edad = edad;
        this.cargo = cargo;
    }
}