function memFibonacci() {
    function fibonacci(n) {
        if (n <= 1) {
            return 1;
        }
    
        return fibonacci(n - 2) + fibonacci(n - 1);
    }

    let counter = 0;

    return function inner() {
        let result = fibonacci(counter);

        counter++;

        return result;
    }
}

let inner = memFibonacci();

console.log(inner());
console.log(inner());
console.log(inner());
console.log(inner());
console.log(inner());
console.log(inner());