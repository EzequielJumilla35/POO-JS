/*Requisitos previos: Conocer los siguientes conceptos. Constantes, variables, funciones, objetos, arrays y tipos de datos básicos de Javascript
*/

/*Definición: La Programación Orientada a Objetos (POO) es un paradigma de programación, es decir, un modelo o un estilo de programación que nos da unas guías sobre cómo trabajar con él. Se basa en el concepto de clases y objetos. Este tipo de programación se utiliza para estructurar un programa de software en piezas simples y reutilizables de planos de código (clases) para crear instancias individuales de objetos.*/

//Crear un Object Literal
/*Sintaxis 
1) no se usa el signo = como en la variables, se utiliza : 
2) al final del valor de la key se utiliza una ,
*/
const user = {
    name : "Ezequiel", //name es la key, "Ezequiel" es el valor
    surname: "Jumilla", //surname es la key, "Jumilla" es el valor
    age: 23, //age es la key, 23 es el valor
    actividades: ["Deporte","Leer","Programación"], //actividades es la key, [] es el array y dentro de los valores

    OtroObjeto: {
        favouriteArtist: "Kanye West",
        favouriteSports: ["Nba","Tennis","Football"]
    }
}

console.log(user) //Todo el contenido del objeto

console.log(user.name) //Nombre del objeto.key  = "dato". Respuesta==> "Ezequiel"

console.log(user.surname) //Nombre del objeto.key  = "dato". Respuesta==> "Jumilla"

console.log(user.age) //Nombre del objeto.key  = "dato". Respuesta==> 23

console.log(`Mi nombre es Ezequiel y mi activdad favoritar es hacer ${user.actividades[0]} pero tambien ${user.actividades[1]} y mi pasión es la ${user.actividades[2]}`)
//En el último console.log se demuestra que dentro de los objetos se pueden utilizar arrays y sus valores

console.log(`My favourite artist is ${user.OtroObjeto.favouriteArtist}`) //Accediendo a un objeto dentro de otro objeto = Respuesta = "Kanye West"

console.log(`My favourite sport is ${user.OtroObjeto.favouriteSports[0]}`) //Accediendo a un objeto dentro de otro con objeto con array

//----------------------------------------------------------------------------------------------------------

//Propiedad: JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.

const datos = {
    name : "Nick Kyrgios",
    profesion: "Tenista",
    age: 27
}

/*
El objeto datos contiene propiedades que son claves y valor
1)Claves: name, profesion y age
2)Valor: "Nick Kyrgios", "Tenista" y 27 
*/

//---------------------------------------------------------------------------------------------------------

//Metodos: Un metodo es una función la cual es propiedad de un Objeto. Existen dos tipos de métodos: Métodos de Instancia los cuales son tareas integradas realizadas por la instacia de un objeto, y los Métodos Estáticos que son tareas que pueden ser llamadas directamente en el constructor de un objet.

const car = {
    marca : "Chevrolet",
    name: "Camaro",
    color:"Amarillo",
    velocidad : function(informacion){
        if (informacion < 5) {
            console.log("El auto esta encendido")
        }else{
            console.log("el auto esta apagado")
        }
    }
}
/*
Explicacion: car es el objeto, dentro esta el metodo velocidad que es una función
1)velocidad contiene una funcion la cual tiene el parametro (informacion)
2)Dentro de la funcion tiene una condicion if, la cual determina que si el parametro informacion es menor a 5, devuelve un console.log("El auto esta encendido")
3)Tambien tiene otra condición else, la cual determina que si el parametro informacion es mayor a 5, devuelve un console.log("el auto esta apagado")
4)Se llama al objeto y metodo => car.velocidad()
5)Dentro de los parentesis de car.velocidad() se asigna un valor y dependiendo del valor asignado al parametro sera la respuesta indicada en esta explicacion en los items 2 y 3.
*/

car.velocidad(7) // Respuesta: "El auto esta apagado"
car.velocidad(3) // Respuesta: "El auto esta encendido"


//----------------------------------------------------------------------------------------------------------

//This: Por norma general, en JavaScript la keyword this hace referencia al objeto al que pertenece, obteniendo su valor en el momento en el que una función es invocada. Esto implica dos conceptos clave:
//La keyword this hace referencia a su “propietario”.
//Su valor dependerá del lugar desde la cual sea invocada.


function datoThis() {
    return `My name is ${this.name} ${this.surname}`
}

const nbaPlayer = {
    name : "Kevin",
    surname: "Durant",
    datoThis : datoThis
    
}
console.log(nbaPlayer.datoThis())//Respuesta: My name is Kevin Durant

const nbaPlayer2 = {
    name : "Lebron",
    surname: "James",
    datoThis : datoThis
}

console.log(nbaPlayer2.datoThis()) //Respuesta: My name is Lebron James

const nbaPlayer3 = {
    noname: "Donovan",
    nosurname:"Mitchell",
    datoThis : datoThis
}
console.log(nbaPlayer3.datoThis()) //Respuesta: My name is undefined undefined

/*
Explicacion: Se crea la funcion datoThis la cual retorna ``My name is ${this.name} ${this.surname}``
1)this.name hace referencia al valor actual de la clave name
2)this.surname hace referencia al valor actual de la clave surname
3)Dentro de los objetos nbaPlayer y nbaPlayer2 se encuentran las claves name y surname
4)A su vez tienen el metodo datoThis 
5)Por lo que con un console.log va a darnos el nombre y apellido de los objetos
6)En el objeto nbaPlayer no tiene las claves name y surname, por lo que el console.log va a devolver My name is undefined undefined
*/

const cuentaBancaria = {
    nroCuenta : "0011-2233-4455-6789",
    saldo: 100, //Saldo inicial es 100

    depositar :function depositar(dinero){
     return this.saldo += dinero
    },
    //El metodo depositar contiene un parametro dinero y va a retornar el saldo actual más el valor que se le asigne al parametro dinero

    retiro: function retiro(dinero) {
        return this.saldo -= dinero
    }
    //El metodo retiro contiene un parametro dinero y va a retornar el saldo actual menos el valor que se le asigne al parametro dinero

}
cuentaBancaria.depositar(900) //Respuesta: saldo(100) + 900
cuentaBancaria.retiro(500)    //Respuesta : saldo(1000) - 500
console.log(cuentaBancaria.saldo) //Respuesta: saldo(500)


//---------------------------------------------------------------------------------------------------------

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


//----------------------------------------------------------------------------------------------------------


//Object constructor: Todos los objetos tienen una propiedad constructor. Los objetos creados sin explicitar el uso de una función (como son los objetos y las cadenas literales) tendrán una propiedad de constructor que apunta al tipo de constructor del Objeto Fundamento para ese objeto.

const artist = new Object()
artist.name = "Kanye West"
artist.age = "45"
console.log(artist)

//Basicamente es otra sintaxis para poder crear Objetos.

//----------------------------------------------------------------------------------------------------------

//Obtener las keys o values del objeto

const players = {
    name : "Lionel Messi",
    age: 35,
    sport : "Football",
    style (){
        return "Goals and assists"
    }
}

console.log(Object.keys(players)) //(4) ['name', 'age', 'sport', 'style']
console.log(Object.values(players)) //(4) ['Lionel Messi', 35, 'Football', ƒ]

console.log(players.style()) // Goals and assists


//----------------------------------------------------------------------------------------------------------

//New: El operador new permite a los desarrolladores crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados que tiene un función constructora.


//Plantilla
function Ciudades (city,country, continents, mostFamous){
    this.city = city //El nuevo elemento es igual al parametro
   this.country = country//El nuevo elemento es igual al parametro
   this.continents = continents//El nuevo elemento es igual al parametro
   this.mostFamous = mostFamous//El nuevo elemento es igual al parametro
}

const ciudades1 = new Ciudades("Rosario","Argentina","South American","Lionel Messi")
console.log(ciudades1)//           Respuesta: Ciudades {city: 'Rosario', country: 'Argentina', continents: 'South American', mostFamous: 'Lionel Messi'}
console.log(ciudades1.city)//      Respuesta: Rosario
console.log(ciudades1.country)//   Respuesta: Argentina
console.log(ciudades1.continents)//Respuesta: South American
console.log(ciudades1.mostFamous)//Respuesta: Lionel Messi

const ciudades2 = new Ciudades("Villa Fiorito","Argentina","South American","Diego Maradona")
console.log(ciudades2) //          Respuesta: Ciudades {city: 'Villa Fiorito', country: 'Argentina', continents: 'South American', mostFamous: 'Diego Maradona'}
console.log(ciudades2.city)//      Respuesta: Villa Fiorito
console.log(ciudades2.country)//   Respuesta: Argentina
console.log(ciudades2.continents)//Respuesta: South American
console.log(ciudades2.mostFamous)//Respuesta: Diego Maradona

//----------------------------------------------------------------------------------------------------------


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
//-----------------------------------------------------------------------------------------------------------


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

//---------------------------------------------------------------------------------------------------------


//Principios de programación orientada a objetos para considerar un lenguaje como POO.
/*
1)Modularidad:La modularidad es, en programación modular y más específicamente en programación orientada a objetos, la propiedad que permite subdividir una aplicación en partes más pequeñas (llamadas módulos), cada una de las cuales debe ser tan independiente como sea posible de la aplicación en sí y de las partes restantes


2)Código reutilizable:La reutilización de código se refiere al comportamiento y a las técnicas que garantizan que una parte o la totalidad de un programa informático existente se pueda emplear en la construcción de otro programa. De esta forma se aprovecha el trabajo anterior, se economiza tiempo, y se reduce la redundancia.


3)Asociación:La asociación se podría definir como el momento en que dos objetos se unen para trabajar juntos y así, alcanzar una meta. Un punto a tomar muy en cuenta es que ambos objetos son independientes entre sí, veremos un poco más adelante qué implicación tiene esto.


4)Agregación:La agregación es un tipo de asociación que indica que una clase es parte de otra clase (composición débil). Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas).


5)Composición:Es el mecanismo en el cual una clase se construye a partir de otros objetos de igual o distinto tipo, pudiéndolos combinar para obtener la funcionalidad deseada. En la composición la nueva clase, mantiene una relación “Usa/Tiene un” (Uses/Has a), con los objetos que son parte de la clase.


6)Encapsulamiento:En programación modular, y más específicamente en programación orientada a objetos, se denomina encapsulamiento al ocultamiento del estado, es decir, de los datos miembro de un objeto de manera que solo se pueda cambiar mediante las operaciones definidas para ese objeto.


7)Herencia: Es el mecanismo por el cual una clase permite heredar las características (atributos y métodos) de otra clase. La herencia permite que se puedan definir nuevas clases basadas de unas ya existentes a fin de reutilizar el código, generando así una jerarquía de clases dentro de una aplicación.


8)Polimorfismo: es la capacidad que tienen ciertos lenguajes para hacer que, al enviar el mismo mensaje (o, en otras palabras, invocar al mismo método) desde distintos objetos, cada uno de esos objetos pueda responder a ese mensaje (o a esa invocación) de forma distinta.

*/

//----------------------------------------------------------------------------------------------------------

//Asociación

class InfoPersonal {
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}  

const userOne = new InfoPersonal("Ezequiel","Jumilla")
const userTwo = new InfoPersonal("Pipo", "Gorosito")

userOne.parent = userTwo
console.log(userOne)

//----------------------------------------------------------------------------------------------------------


//Agregación

const empresa = {
    name : "Nike",
    patrocinados: []
}

class InfoPersonal1 {
    constructor (name, surname){
        this.name = name
        this.surname = surname
    }
}

const usuarioNew = new InfoPersonal1("Rafael","Nadal")
const usuarioNew2 = new InfoPersonal1("Cristiano","Ronaldo")

empresa.patrocinados.push(usuarioNew)
empresa.patrocinados.push(usuarioNew2)

console.log(empresa)
/*RESPUESTA
{name: 'Nike', patrocinados: Array(2)}
name
: 
"Nike"
patrocinados
: 
Array(2)
0
: 
InfoPersonal1 {name: 'Rafael', surname: 'Nadal'}
1
: 
InfoPersonal1 {name: 'Cristiano', surname: 'Ronaldo'}
length
: 
2

*/

//---------------------------------------------------------------------------------------------------------

//Composición

const dataUser = {
    name: "Ezequiel",
    apellido: "Jumilla",
    city : {
        city: "Buenos Aires",
        team: "Gelp"
    }
}


//----------------------------------------------------------------------------------------------------------


//Encapsulación

function EmpresaDeportes(name)  {
    let empleados = []
    this.name = name
  
    this.allEmpleados = function () {
        return empleados
    }
 
   this.agregarEmpleados = function (newEmpleado){
     empleados.push(newEmpleado)
   }
}

const nuevaEmpresa = new EmpresaDeportes("Adidas")

nuevaEmpresa.agregarEmpleados({name:"Martin"})

console.log(nuevaEmpresa)
console.log(nuevaEmpresa.allEmpleados()) //Respuesta: Martin

//----------------------------------------------------------------------------------------------------------


//Herencia

//Clase base o padre
class UserAtp {
    constructor(namePlayer, surnamePlayer){
        this.namePlayer = namePlayer
        this.surnamePlayer = surnamePlayer
    }


}

//Clase herencia o hijo
class RankingAtp  extends UserAtp{
    constructor(namePlayer, surnamePlayer,ranking){
        super(namePlayer,surnamePlayer)
        this.ranking = ranking
        }
    infoPlayer(){
        return (`Name:${this.namePlayer} ${this.surnamePlayer}. Ranking ${this.ranking}`)
    }
}

const nickKyrgios = new RankingAtp("Nick", "Kyrgios", 25)
const rogerFederer = new RankingAtp("Danil","Medvedev",1)


console.log(nickKyrgios.infoPlayer())
console.log(rogerFederer.infoPlayer())
//----------------------------------------------------------------------------------------------------------



