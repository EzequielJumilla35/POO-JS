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