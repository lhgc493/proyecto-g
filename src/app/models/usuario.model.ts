// la clase se crea inyectandolo dentro del constructor

export class UsuarioModel {
<<<<<<< HEAD
   
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
   
=======
    constructor(
    public usuid: number,
    public email: string,
    public pwd: string,
    public img?: string, // opcional
    public rol?: string  // opcional

    ) {}
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
}
