class Personnage {
    constructor (nom , sante , force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
    }
    decrire() {
        return `${this.nom} a ${this.sante} point de vie , ${this.force} force et ${this.xp} xp`
    }
}


const aurora = new Personnage('Aurora', 100 , 8);
const glacius = new Personnage('Glacius', 100, 15);

const div = document.querySelector('.container');
div.innerHTML = aurora.decrire();

