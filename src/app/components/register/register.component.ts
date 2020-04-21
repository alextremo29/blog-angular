import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'; //modelo Usuario
import {UserService} from '../../services/user.service' // servicio que se conecta al api

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [UserService]
})
export class RegisterComponent implements OnInit {
	//Titulo de la pagina
  public page_title: string;
  //objeto del modelo usuario
  public user : User;
  // atributo donde se guardan las respuestas del api
  public status : string;

  constructor(private _userService :  UserService) { 
  	this.page_title = "Registrate";
    this.user = new User(1,'','','ROLE_USER','','','','');
  }

  ngOnInit(): void {
  	console.log("Componente de registro lanzado");
    console.log(this._userService.test());
  }

  onSubmit(form){
    // Se invoca el metodo register del servicio usuario que consume el endpoint del api
    this._userService.register(this.user).subscribe(
      response => {
        if (response.status == "success") {
          this.status = response.status
          form.reset(); // limpiar formulario
        } else{
          this.status = 'error';
        }
        console.log(response);

      },
      error=> {
        this.status = 'error';
        console.log (<any>error);
      }
    );
    
  }

}
