export class Empleado{

    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean
    ){}

    public toString = (): String=>{
        return this.nombre+" "+this.edad+" "+this.cargo+" "+this.contratado;
    }
}