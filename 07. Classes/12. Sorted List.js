class List {
    constructor() {
        this.elements = [];
    }

    add(element) {
        let index = this.elements.findIndex(e => e > element);

        if (index === -1) {
            this.elements.push(element);
        }
        else {
            this.elements.splice(index, 0, element);
        }
    }

    remove(index) {
        if (index >= 0 && index < this.elements.length) {
            this.elements.splice(index, 1);
        } 
        else {
            throw new Error('Index out of bounds');
        }
    }

    get(index) {
        if (index >= 0 && index < this.elements.length) {
            return this.elements[index];
        } 
        else {
            throw new Error('Index out of bounds');
        }
    }

    get size() {
        return this.elements.length;
    }
}

let list = new List();

list.add(5);
list.add(6);
list.add(7);

console.log(list.elements);
console.log(list.get(1));

list.remove(1);

console.log(list.get(1));
console.log(list.elements);
console.log(list.size);