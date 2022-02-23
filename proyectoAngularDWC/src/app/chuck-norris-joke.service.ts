import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisJokeService {

  public url:string;

  constructor(private http: HttpClient) {
    this.url = "https://api.chucknorris.io/jokes/categories";
    // this.url ="";
  }

  obtener(){
    return this.http.get(this.url);
  }
}
