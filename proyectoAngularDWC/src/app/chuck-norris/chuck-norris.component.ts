import { Component, OnInit } from '@angular/core';
import { ChuckNorrisJokeService } from '../chuck-norris-joke.service';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {
  
  public categoria :Array<String>;
  public myForm: FormGroup;
  
  
  constructor(private _peticionesService: ChuckNorrisJokeService) {
    this.categoria=[];
   }

  ngOnInit(): void {
    this._peticionesService.obtener().subscribe((data: any)=>{
       console.log(data);
       this.categoria = data;
    });
  }
  // obtener(): void{
  //     // this.categoria=this._peticionesService.obtener();
  // }

}
