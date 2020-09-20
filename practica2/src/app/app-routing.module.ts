import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import { CrearsubscripcionComponent } from './components/crearsubscripcion/crearsubscripcion.component';
import {BdComponent} from './components/bd/bd.component';

const routes: Routes = [
  {
    path: "crearsuscripcion", 
    component: CrearsubscripcionComponent
  },
  {path:"register", component:RegisterComponent},
  {path:"users", component:BdComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
