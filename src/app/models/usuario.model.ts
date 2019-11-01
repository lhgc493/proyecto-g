// la clase se crea inyectandolo dentro del constructor

export class UsuarioModel {
    constructor(
    public usuid: number,
    public email: string,
    public pwd: string,
    public img?: string, // opcional
    public rol?: string  // opcional

    ) {}
}
