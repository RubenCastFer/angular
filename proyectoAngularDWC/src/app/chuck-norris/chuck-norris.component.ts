import { Component, OnInit } from '@angular/core';
import { ChuckNorrisJokeService } from '../chuck-norris-joke.service';
import { FraseChuckNorrisService } from '../frase-chuck-norris.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {
  
  public categoria :Array<String>;
  public frases :Array<String>;
  public frase: string;
  public myForm: FormGroup; 
  public category: string=('');
  public respuesta: string=('');
  
  
  constructor(private fb: FormBuilder, private _peticionesService: ChuckNorrisJokeService, private _frasePeticionService: FraseChuckNorrisService) {
    this.categoria=[];
    this.frases=[];
    this.frase='';

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

    this._frasePeticionService.recuperarCategoria(this.respuesta).subscribe((data: any)=>{
      console.log(data.value);
      this.frase = data.value;
      this.frases.push(this.frase);
    });  
  }

  borrarFrase(index:number){
    console.log("borrar");
    this.frases.splice(index,1)
  }

}
