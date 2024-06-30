function sortArray(input) {
    let array = input[0];
    let command = input[1];

    if (command === 'asc') {
        return array.sort((a, b) => a - b);
    } 
    else if (command === 'desc') {
        return array.sort((a, b) => b - a);
    }
    else {
        return "Invalid order parameter";
    }
}

let input = [[14, 7, 17, 6, 8], 'asc'];
let input2 = [[14, 7, 17, 6, 8], 'desc'];

console.log(sortArray(input));
console.log(sortArray(input2));