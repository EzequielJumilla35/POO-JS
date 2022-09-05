//Asociación : La asociación se podría definir como el momento en que dos objetos se unen para trabajar juntos y así, alcanzar una meta. Un punto a tomar muy en cuenta es que ambos objetos son independientes entre sí, veremos un poco más adelante qué implicación tiene esto.

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