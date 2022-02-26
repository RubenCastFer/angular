import { Component, OnInit } from '@angular/core';
import { ChuckNorrisJokeService } from '../chuck-norris-joke.service';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {
  
  public categoria :Array<String>;
  public myForm: FormGroup; 
  public category: string=('');
  public respuesta: string=('');
  
  
  constructor(private fb: FormBuilder, private _peticionesService: ChuckNorrisJokeService) {
    this.categoria=[];
    this.myForm=this.fb.group({
      category:["", [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      category:["", Validators.required]
    });

    this._peticionesService.obtener().subscribe((data: any)=>{
       console.log(data);
       this.categoria = data;
    });
  }

  saveData(){
    console.log(this.myForm.value);
    this.respuesta=this.myForm.value.category;
    console.log(this.respuesta);
  }
  
  // obtener(): void{
  //     // this.categoria=this._peticionesService.obtener();
  // }

}
