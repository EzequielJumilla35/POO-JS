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