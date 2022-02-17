import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombre:string="pantalon";
  public colleccionRopa = ['pantalones blancos','Camisa roja'];
  constructor() { }

  getRopa(): Array<string>{
    return this.colleccionRopa;
  }

  addRopa(nombrePrenda:string): Array<string>{
    this.colleccionRopa.push(nombrePrenda);
    return this.getRopa();
  }

  deleteRopa(index:number){
    this.colleccionRopa.splice(index,1);
  }



}
