import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'chuck-norris',component: ChuckNorrisComponent},
  {path: 'home',component: HomeComponent},
  {path: 'formulario',component: FormularioComponent},

  {path: '', component: HomeComponent},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
