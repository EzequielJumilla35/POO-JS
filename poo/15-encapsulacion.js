//Encapsulamiento: En programación modular, y más específicamente en programación orientada a objetos, se denomina encapsulamiento al ocultamiento del estado, es decir, de los datos miembro de un objeto de manera que solo se pueda cambiar mediante las operaciones definidas para ese objeto.

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