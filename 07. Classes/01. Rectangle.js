class Rectangle {
    constructor(heigth, width, color) {
        this.heigth = heigth;
        this.width = width;
        this.color = color;
    }

    calculateArea() {
        return this.heigth * this.width;
    }
}

const rectangle = new Rectangle(5, 4, 'yellow');

console.log(rectangle.calculateArea());
console.log(rectangle.color);