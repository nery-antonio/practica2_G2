import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import { CrearsubscripcionComponent } from './crearSuscripcion/crearsubscripcion/crearsubscripcion.component';

const routes: Routes = [
  {
    path: "crearsuscripcion", 
    component: CrearsubscripcionComponent
  },
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
