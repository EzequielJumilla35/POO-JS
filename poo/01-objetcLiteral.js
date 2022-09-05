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