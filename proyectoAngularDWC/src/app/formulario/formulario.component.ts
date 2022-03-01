import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  submitted = false;
  public formContacto: FormGroup =this.fb.group({
    nombre: new FormControl("", [Validators.required]),
    primerApellido:new FormControl("", [Validators.required]),
    segundoApellido:new FormControl("", [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono:new FormControl("", [Validators.required, Validators.pattern("[0-9]{9}")]),

  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f() { return this.formContacto.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formContacto.invalid) {
            return;
        }

        // display form values on success
        console.log(this.formContacto.value);
        var emailBody = "Nombre: "+this.formContacto.value.nombre+"%0APrimer Apellido: "+this.formContacto.value.primerApellido+"%0ASegundo Apellido: "+this.formContacto.value.segundoApellido+"%0ACorreo: "+this.formContacto.value.email+"%0ANº Telefono: "+this.formContacto.value.telefono;
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formContacto.value, null, 4));
        location.href = "mailto:ruben.castellano.fernandez.al@iespoligonosur.org"+'?subject=Pongase en contacto con '+this.formContacto.value.nombre+" "+this.formContacto.value.primerApellido+" "+this.formContacto.value.segundoApellido+'&body='+emailBody;

    }

    onReset() {
        this.submitted = false;
        this.formContacto.reset();
    }
}
//https://jasonwatmore.com/post/2020/07/07/angular-10-reactive-forms-validation-example
