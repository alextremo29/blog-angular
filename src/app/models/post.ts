/*
Modelo de la clase Posts que hace referencia a la tabla de base de datos users
 */
export class Post{
	constructor(
		public id : number,
		public user_id: number,
		public category_id: number,
		public title: string,
		public content: string,
		public image: string,
		public createdAt: any
	){}
}