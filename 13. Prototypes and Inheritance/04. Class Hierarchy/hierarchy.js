function createClasses() {
    class Figure {
        constructor(units = "cm") {
            this.units = units;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        convert(value) {
            switch (this.units) {
                case 'm':
                    return value / 100;
                case 'mm':
                    return value * 10;
                default:
                    return value;
            }
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            let radius = this.convert(this.radius);

            return Math.PI * Math.pow(radius, 2);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.convert(this.radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            let width = this.convert(this.width);
            let height = this.convert(this.height);

            return width * height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.convert(this.width)}, height: ${this.convert(this.height)}`;
        }
    }

    return { Figure, Circle, Rectangle };
}

let { Circle: CircleClass, Rectangle: RectangleClass } = createClasses();

let c = new CircleClass(5);
console.log(c.area);
console.log(c.toString());

let r = new RectangleClass(3, 4, 'mm');
console.log(r.area);
console.log(r.toString());

r.changeUnits('cm');
console.log(r.area);
console.log(r.toString());

c.changeUnits('mm');
console.log(c.area);
console.log(c.toString());