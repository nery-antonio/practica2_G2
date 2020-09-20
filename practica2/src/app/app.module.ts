import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule} from '@angular/forms';
import { RegisterServiceService } from './services/register/register-service.service';
import { CrearsubscripcionComponent } from './components/crearsubscripcion/crearsubscripcion.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';
import { BdComponent } from './components/bd/bd.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CrearsubscripcionComponent,
    BdComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    RegisterServiceService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

