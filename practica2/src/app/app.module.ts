import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule} from '@angular/forms';
import { RegisterServiceService } from './services/register/register-service.service';
import { CrearsubscripcionComponent } from './components/crearsubscripcion/crearsubscripcion.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CrearsubscripcionComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    RegisterServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

