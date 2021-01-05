class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack( target ){
        this.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.stat = stat;
        this.text = text;
        this.mag = mag;
    }
    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            this.res += this.mag;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }


}


const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const HardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
HardAlgo.play(RedBeltNinja);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const UnHandledPromiseRejection = new Effect("UnHandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
UnHandledPromiseRejection.play(BlackBeltNinja);
const PairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);