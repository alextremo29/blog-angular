// Se importan las librerias necesarias para hacer peticiones al api
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {global} from './global'; // Archivo con parametros globales de la aplicacion


@Injectable ()
export class UserService {
	public url : string
	
	constructor(public _http : HttpClient) {
		this.url = global.url;
	}
	test(){
		return "Hola mundo desde un servicio!!!";
	}

	register(user): Observable<any>{
		let json = JSON.stringify(user);
		let params = 'json='+json;

		/*Cabeceras que se deben agregar para que el api reciba los datos del front
		esta cabecera en particular hace que los datos se envien como un formlario html*/
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+'register',params,{headers:headers});

	}
	signup(user, gettoken = null) :Observable <any>{
		if (gettoken!= null) {
			user.gettoken = 'true';
		}
		let json = JSON.stringify(user);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+'login',params,{headers});
	}
}