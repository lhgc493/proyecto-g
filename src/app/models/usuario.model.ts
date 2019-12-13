// la clase se crea inyectandolo dentro del constructor

export class UsuarioModel {
   
    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public img?: string,
        public role?: string,
        public google?: boolean,
        // tslint:disable-next-line: variable-name
        public _id?: string

    ) {}
   
}
