const div = document.querySelector('.container');




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
    attaquer(cible) {

       

        if (this.sante > 0) {
    
    
          div.innerHTML += 
    
            `${this.nom} attaque ${cible.nom} et lui inflige ${this.force} points de dégâts <br />`
    
          ;
    
          cible.sante -= this.force;
}

        if(cible.sante > 0) {
            this.sante -= cible.force
                div.innerHTML += `${cible.nom} a encore ${cible.sante} points de vie <br />`;
                div.innerHTML += `${cible.nom} attaque ${this.nom} et lui inflige ${cible.force} points de dégats <br /> `
                div.innerHTML += `${this.nom} a encore ${this.sante} point de vie <br />`
        }
        
    }};


const aurora = new Personnage('Aurora', 100 , 8);
const glacius = new Personnage('Glacius', 100, 15);
const monstre = new Personnage('Archer squelette', 45, 3);



if(monstre.sante < 100 || aurora.sante < 100) {
    while(monstre.sante > 0 ) {
    monstre.attaquer(aurora)
    }
    
}

