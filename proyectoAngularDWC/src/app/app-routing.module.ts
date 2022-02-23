import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';

const routes: Routes = [
  {path: 'chuck-norris',component: ChuckNorrisComponent},

  {path: '', component: ChuckNorrisComponent},
  {path: '**',component: ChuckNorrisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
