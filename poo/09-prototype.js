//Prototype:Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. En este artículo, explicaremos como funcionan los prototipos y también cómo se pueden usar las propiedades de estos para añadir métodos a los contructores existentes.

function DatosUsuarios(name, surname,age) {
    this.name = name
    this.surname = surname
    this.age = age
    this.funcionalidad = function () {
        return `Nombre: ${this.name} ${this.surname}. Edad:${this.age}`
    }
}

const usuarioNuevo = new DatosUsuarios ("Ezequiel","Jumilla",23)
const usuarioNuevo1= new DatosUsuarios ("Kanye","West",45)
const usuarioNuevo2= new DatosUsuarios ("Lil","Wayne",39)

console.log(usuarioNuevo)
console.log(usuarioNuevo.funcionalidad())

console.log(usuarioNuevo1)
console.log(usuarioNuevo1.funcionalidad())

console.log(usuarioNuevo2)
console.log(usuarioNuevo2.funcionalidad())

/*
Esto es un repaso de lo aplicado en la seccion de New
*/

//Usando prototype
DatosUsuarios.prototype.message = function () {
    return `${this.name} ${this.surname}. Profesion: ESTE ES EL PROTOTYPE "${this.profesion}"`
}
//Prototype => Se crea una nueva caracteristica que podra ser utilizada en el objeto que nosotros elijamos.

usuarioNuevo.profesion = "Developer" 
console.log(usuarioNuevo.profesion)
//Respuesta:Developer
console.log(usuarioNuevo.message()) 
//Respuesta:Ezequiel Jumilla. Profesion: ESTE ES EL PROTOTYPE "Developer"


usuarioNuevo1.profesion = "Artist"
console.log(usuarioNuevo1.profesion)
//Respuesta:Artist
console.log(usuarioNuevo1.message())
//Respuesta:Kanye West. Profesion: ESTE ES EL PROTOTYPE "Artist"

usuarioNuevo2.profesion = "Rapper"
console.log(usuarioNuevo2.profesion)
//Respuesta: Rapper
console.log(usuarioNuevo2.message())
//Respuesta: Lil Wayne. Profesion: ESTE ES EL PROTOTYPE "Rapper"
//