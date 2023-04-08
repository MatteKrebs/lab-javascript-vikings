// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack(){
        return this.strength;
     }
    receiveDamage(theDamage){
        this.health -= theDamage;
    };
    }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    };
    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health  > 0){
        return `${this.name} has received ${theDamage} points of damage` 
     };
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        };
    };
    battleCry(){
        return 'Odin Owns You All!'
    };
};

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        };
        if (this.health <= 0) {
            return 'A Saxon has died in combat'
        };
    };
};

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    };
    addViking(randomViking){
        this.vikingArmy.push(randomViking);
    };
    addSaxon(randomSaxon){
        this.saxonArmy.push(randomSaxon);
    };
    vikingAttack(){
        receiveDamage()
    };
    saxonAttack(){

    };
    showStatus(){

    }   
};
