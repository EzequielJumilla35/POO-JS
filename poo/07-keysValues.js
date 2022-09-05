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

