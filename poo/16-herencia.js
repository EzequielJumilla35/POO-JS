//Herencia: Es el mecanismo por el cual una clase permite heredar las características (atributos y métodos) de otra clase. La herencia permite que se puedan definir nuevas clases basadas de unas ya existentes a fin de reutilizar el código, generando así una jerarquía de clases dentro de una aplicación.

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