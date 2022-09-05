//Agregación: La agregación es un tipo de asociación que indica que una clase es parte de otra clase (composición débil). Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas).

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