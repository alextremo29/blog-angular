//IMPORTS NECESARIOS
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//IMPORTAR COMPONENTES
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

//Definir rutas del proyecto
const appRoutes: Routes =[
	{path:'',component:HomeComponent},
	{path:'inicio',component:HomeComponent},
	{path:'login',component:LoginComponent},
	{path:'registro',component:RegisterComponent},
	{path:'**',component:ErrorComponent} // Esta ruta siempre debe ir al final
];


//Se exportan las rutas a constantes que puedan ser usadas por angular
export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);