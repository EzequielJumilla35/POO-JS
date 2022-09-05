//Constructor: Un constructor es un método especial de una clase que se llama automáticamente siempre que se declara un objeto de esa clase. Su función es inicializar el objeto y sirve para asegurarnos que los objetos siempre contengan valores válidos.

function Usuario () { //Creacion del metodo constructor
    this.name = ""    
    this.surname = ""
    this.profesion = ""
    this.age = 0
    this.message = function (){
        return `Nombre completo:${this.name} ${this.surname} 
                Edad: ${this.age}
                Profesion: ${this.profesion}`
    }
}


    const identificacion = new Usuario()
    identificacion.name = "Ezequiel"
    identificacion.surname = "Jumilla"
    identificacion.profesion = "Developer"
    identificacion.age = 23
    identificacion.message

console.log(identificacion)           // Respuesta: Usuario {name: 'Ezequiel', surname: 'Jumilla', profesion: 'Developer', age: 23, message: ƒ}
console.log(identificacion.name)      // Respuesta: Ezequiel
console.log(identificacion.surname)   // Respuesta: Jumilla
console.log(identificacion.profesion) //Respuesta: Developer
console.log(identificacion.age)       // Respuesta: 23
console.log(identificacion.message()) // Respuesta:Nombre completo:Ezequiel Jumilla 
                                                // Edad: 23
                                               //  Profesion: Developer

const identificacion2 = new Usuario()
identificacion2.name = "Kevin"
identificacion2.surname = "Durant"
identificacion2.profesion = "Basketball Player"
identificacion2.age = 34
identificacion2.message

console.log(identificacion2) //         Respuesta: Usuario {name: 'Kevin', surname: 'Durant', profesion: 'Basketball Player', age: 34, message: ƒ}
console.log(identificacion2.name)//     Respuesta: Kevin
console.log(identificacion2.surname)//  Respuesta:Durant
console.log(identificacion2.profesion)//Respuesta: Basketball Player
console.log(identificacion2.age)//      Respuesta: 34
console.log(identificacion2.message())//Respuesta: Nombre completo:Kevin Durant 
                                                  // Edad: 34
                                                  // Profesion: Basketball Player

/*Explicacion
1)La funcion Usuario, es un contructor, una plantilla de los objetos que van a ser reutilizados
2)Dentro del constructor estan todos las keys con this porque van a tener valores con distintos
3)Se crea una variable identificacion se le asigna el metodo new con el nombre del constructor, en este caso Usuario()
4)Utilizando el nombre de la variable creada en el item 3 con un . y el nombre de la key en el constructor se le puede asignar un valor, ejemplo : identificacion.name = "Ezequiel" 
*/