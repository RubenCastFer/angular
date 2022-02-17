import { Component, OnInit } from '@angular/core';
import { RopaService } from '../ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public ropa: Array<string>; 
  public prenda:string
  constructor(private _ropaService: RopaService) {
    this.ropa=[];
    this.prenda="";
  }

  ngOnInit(): void {
    this.obtener();
  }

  obtener(): void{
    this.ropa=this._ropaService.getRopa();
  }

  mostrar(): Array<string>{
    return this.ropa;
  }

  anadirRopa(): void{
    this._ropaService.addRopa(this.prenda)
  }
}
