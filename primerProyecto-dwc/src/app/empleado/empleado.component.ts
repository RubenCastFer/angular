import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public title = "Bienvenido Empleado";
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public empleadoExter:Empleado;
  public trabajadorExterno:boolean;

  constructor() { 
    this.empleado=new Empleado("ruben",25,"informatico",true);
    this.trabajadores=[new Empleado("juan",25,"admin",true),new Empleado("david",25,"jefe",true)];
    this.empleadoExter=new Empleado("doroti",25,"informatico",true);
    this.trabajadorExterno=true;
  
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno=valor;
  }
  ngOnInit(): void {
  }

}
