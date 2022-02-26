import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CocheComponent } from './coche/coche.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AlumnadoDAWComponent } from './alumnado-daw/alumnado-daw.component';

const routes: Routes = [
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'coche', component: CocheComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'alumnadoDaw', component: AlumnadoDAWComponent},

  //Estas dos rutas deben ir al final
  {path: '', component: EmpleadoComponent},
  {path: '**',component: EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
