class usuario {
    constructor(nombre= "",apellido= "", libros= [] , mascotas = []) {
        this.nombre = nombre ;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
     getFullName() {
        console.log( ` ${this.nombre} ${this.apellido} `);
    }

    addMascota () {
        this.mascotas.push("gato");
        console.log(this.mascotas);
    }

    countMascotas () {
        if (this.mascotas.length > 0) {
            console.log(this.mascotas.length);
            
        } else {
            console.log("NO HAY MASCOTAS");
        }
    }

    addBock (){
        this.libros.push({nombre:"el hombre araña" , autor : "leen" } , {nombre:"el hombre de hierro" , autor : "element"})
        console.log(this.libros);

    }

    getBookName() {
       
        this.libros.map(function(nombres){
            console.log(nombres.nombre);
        })
    }


    
}

const persona1 = new usuario ("Brandon", "Acosta");




console.log(persona1.getFullName());

console.log(persona1.addMascota());

console.log(persona1.countMascotas());

console.log(persona1.addBock());

console.log(persona1.getBookName());










 









