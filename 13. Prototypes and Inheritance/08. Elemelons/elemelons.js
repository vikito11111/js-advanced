class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.element = '';
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Water';
    }
}

class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Fire';
    }
}

class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Earth';
    }
}

class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Air';
    }
}

class Melolemonmelon extends Watermelon{
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementTypes = [
            'Fire',
            'Earth',
            'Air',
            'Water'
        ];
    }

    morph() {
        let nextElement = this.elementTypes.shift();

        this.element = nextElement;

        this.elementTypes.push(nextElement);
    }
}

let test = new Melon(100, "Test");
let watermelon = new Watermelon(12.5, "Kingsize");

console.log(watermelon.toString());