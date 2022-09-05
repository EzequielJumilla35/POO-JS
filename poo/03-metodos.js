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

