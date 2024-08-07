class Rectangle {
    constructor(width, height) {
        this.width = width,
        this.height = height
    }

    area() {
        return this.width * this.height;
    }

    compareTo(otherRectangle) {
        let areaDiff = otherRectangle.area() - this.area();

        if (areaDiff !== 0) {
            return areaDiff;
        } 
        else {
            return otherRectangle.width - this.width;
        }
    }
}

function orderRectangles(rectanglesInput) {
    let rectangles =  rectanglesInput.map(rectangle => new Rectangle(rectangle[0], rectangle[1]));

    rectangles.sort((a, b) => a.compareTo(b))

    return rectangles;
}

console.log(orderRectangles([[10, 5], [5, 12]]));
console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));