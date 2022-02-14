import { Component, OnInit } from '@angular/core';
import { AlumnadoDAW } from './alumnado';

@Component({
  selector: 'app-alumnado-daw',
  templateUrl: './alumnado-daw.component.html',
  styleUrls: ['./alumnado-daw.component.css']
})
export class AlumnadoDAWComponent implements OnInit {
  public titulo:string = "Listado Daw"
  public alumnos:Array<AlumnadoDAW>;

  constructor() { 

    this.alumnos=[new AlumnadoDAW("Ruben","Castellano","48963910s",new Date("1996-06-01"),"Dos Hermanas", 679051051,2,["dwc","dws","dwi"]),
                  new AlumnadoDAW("Manuel","Fernandez","48963911s",new Date("1997-07-01"),"Sevilla", 679051052,2,["dwc","dwi"]),
                  new AlumnadoDAW("David","Peñasco","52963910s",new Date("2000-03-05"),"Triana", 679051554,1,["Programacion"]),
                  new AlumnadoDAW("Juan","Calco","52963910s",new Date("2000-03-05"),"Triana", 679051554,1,["Programacion"])]
  }

  public mostrarPrimero(): AlumnadoDAW[]{
    var alumnosPrimero:Array<AlumnadoDAW>=[];
    var z=0;
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].curso==1) {
        alumnosPrimero[z]=this.alumnos[i];
        z++
      }
    }
    return alumnosPrimero;
  }

  public mostrarSegundo(): AlumnadoDAW[]{
    var alumnosSegundo:Array<AlumnadoDAW>=[];
    var z=0;
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].curso==2) {
        alumnosSegundo[z]=this.alumnos[i];
        z++;
      }
    }
    return alumnosSegundo;
  }
  
  /* Component */
  public isShownPrimero: boolean | undefined;
  public isShownSegundo: boolean | undefined;

ngOnInit(){
  this.isShownPrimero = false; //hidden every time subscribe detects change
}

toggleShowPrimero() {
  this.isShownPrimero = ! this.isShownPrimero;
}
toggleShowSegundo() {
  this.isShownSegundo = ! this.isShownSegundo;
}
}
