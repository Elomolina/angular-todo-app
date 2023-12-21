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
@Injectable({
    providedIn: 'root',
  })
export class Empleados 
{
    empleado: Empleado[] = [];
    getEmpleado():Empleado[]
    {
        return this.empleado;
    }
    eliminarPorId(id:number):void 
    {
      this.empleado = this.empleado.filter(p => p.id !== id);
    }
    modificarEdad(id:number, edad:number)
    {
        for(let empleado of this.empleado)
        {
            if(empleado.id === id)
            {
                empleado.edad = edad;
                if(!Number.isNaN(edad))
                {
                    let fechaNacimiento = new Date(empleado.fechaNac);
                    let fechaActual = new Date();
                    let yearActual = fechaActual.getFullYear();
                    let nacimiento = yearActual - edad;        
                    fechaNacimiento.setFullYear(nacimiento);
                    let fecha = String(fechaNacimiento.toISOString().split('T')[0]);
                    empleado.fechaNac = fecha;
                }
            }
        }
    }
}
export class Empleado 
{
    private static contador:number = 0;
    id:number = 0;
    nombre:string = '';
    fechaNac:string = '';
    edad:number = 0;
    cargo:string = '';
    estatus:boolean = true;
    constructor(nombre:string, fechaNac:string, cargo:string)
    {
        this.id = Empleado.contador;
        Empleado.contador++;
        this.nombre = nombre; 
        this.fechaNac = fechaNac; 
        this.cargo = cargo;
        this.edad = this.calcularEdad();
    }
    calcularEdad():number
    {
        let fechaNacimiento = new Date(this.fechaNac);
        let fechaActual = new Date();
        let f = fechaActual.getTime() - fechaNacimiento.getTime();
        const edad = Math.floor(f / (1000 * 60 * 60 * 24 * 365.25));
        return edad;
    }
}