class Rat {
    rats = [];

    constructor(name) {
        this.name = name;
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);

            //this.otherRat.rats.push(this);
        }
    }

    getRats() {
        return this.rats;

        //return [...this.rats];            - Returns a copy of the object rats.
    }

    toString() {
        return this.name + this.rats.map(rat => `\n##${rat.name}`).join('');
    }
}

let firstRat = new Rat("Peter");

console.log(firstRat.toString());

console.log(firstRat.getRats());

firstRat.unite(new Rat("George"));

firstRat.unite(new Rat("Alex"));

console.log(firstRat.getRats());

console.log(firstRat.toString());