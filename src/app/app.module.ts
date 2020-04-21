import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Libreria para usar funciones de formularios en angular
import { FormsModule } from '@angular/forms';
// Libreria para usar peticiones ajax 
import { HttpClientModule } from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing'


import { AppComponent } from './app.component';
// Se cargan los componentes de la aplicacion
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule, // liberia para el uso de formularios 
    HttpClientModule // Libreria para el uso de peticiones http
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
