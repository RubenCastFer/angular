import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';

const routes: Routes = [
  {path: 'empleado', component: EmpleadoComponent},

  //Estas dos rutas deben ir al final
  {path: '', component: EmpleadoComponent},
  {path: '**',component: EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
