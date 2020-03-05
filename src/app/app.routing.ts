//IMPORTS NECESARIOS
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//IMPORTAR COMPONENTES
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

//Definir rutas del proyecto
const appRoutes: Routes =[
	{path:'',component:LoginComponent},
	{path:'inicio',component:LoginComponent},
	{path:'login',component:LoginComponent},
	{path:'registro',component:RegisterComponent},
];


//Se exportan las rutas a constantes que puedan ser usadas por angular
export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);