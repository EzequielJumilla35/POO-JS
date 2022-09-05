//Class: Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

class Persona {
    constructor(name, surname){ //Dentro de los parentesis del constructor estan los parametros a utilizar
        this.name = name // Se asigna a la propiedad el parametro
        this.surname = surname // Se asigna a la propiedad el parametro
    }

    //En esta seccion se crean los metodos,siempre debajo de donde finaliza {} del constructor
    funcionalidad(){
        return `${this.name} ${this.surname} es Tenista`
    }
}

const infoPersona =  new Persona("Florian","Mayer")
const infoPersona1 = new Persona("Mardy","Fish")

console.log(infoPersona) //Respuesta: Persona {name: 'Florian', surname: 'Mayer'}
console.log(infoPersona.funcionalidad())//Respuesta: Florian Mayer es Tenista

console.log(infoPersona1)// Respuesta:Persona {name: 'Mardy', surname: 'Fish'}
console.log(infoPersona1.funcionalidad())//Respuesta:Mardy Fish es Tenista

//Clase anonima
const claseAnonima = class {
    constructor(comidaFav, bebidaFav){
        this.comidaFav = comidaFav
        this.bebidaFav = bebidaFav
    }
    texto(){
        return `Mi comida favorita es ${this.comidaFav} y mi bebida favorita es ${this.bebidaFav}`
    }
}

const primerUsuario = new claseAnonima("Pasta","Cappuccino")
console.log(primerUsuario.texto()) //Respuesta: Mi comida favorita es Pasta y mi bebida favorita es Cappuccino

const segundoUsuario = new claseAnonima("Asado","Vino")
console.log(segundoUsuario.texto()) //Respuesta: Mi comida favorita es Asado y mi bebida favorita es Vino

/*
Es recomendable utilizar clases, ya que la sintaxis es mas sencilla y nos evita tener que utilizar prototypes, ya que esta incluido.
El constructor contiene todas las propiedades del objeto.
*/