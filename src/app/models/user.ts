/*
Modelo de la clase usuario que hace referencia a la tabla de base de datos users
 */
export class User{
	constructor(
		public id : number,
		public name: string,
		public surname: string,
		public role : string,
		public email : string,
		public password: string,
		public description: string,
		public image: string
	){}
}