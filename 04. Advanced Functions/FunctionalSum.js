const add = (function () {
    let sum = 0;

    function adder(number) {
        sum += number;

        return adder;
    }

    adder.toString = function () {
        return sum;
    };

    return adder;
})();

console.log(add(1)(6)(-3).toString());