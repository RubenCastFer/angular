export class AlumnadoDAW{

    constructor(
        public nombre:string,
        public apellido:string,
        public dni:string,
        public nacimiento:Date,
        public poblacion:string,
        public telefono:number,
        public curso:number,
        public modulos:Array <String>
    ){}

    public toString = (): String=>{
        var cadena = this.nombre+" "+this.apellido+" "+this.dni+" "+this.nacimiento+" "+this.poblacion+" "+this.telefono+" "+this.curso;
        for (let i = 0; i < this.modulos.length; i++) {
            cadena=cadena+" "+this.modulos[i];
        };
        return cadena;
    }
}