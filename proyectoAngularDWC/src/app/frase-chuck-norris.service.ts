import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraseChuckNorrisService {

  public url:string;

  public categoria:string="";

  constructor(private http: HttpClient) { 
    this.url = "https://api.chucknorris.io/jokes/random?category=";
  }

  obtener(){
    return this.http.get(this.url+this.categoria);
  }

  recuperarCategoria(categoria:string){
    this.categoria=categoria;
    return this.obtener();
  }

}
