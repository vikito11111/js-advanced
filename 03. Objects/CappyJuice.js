function produceBottles(data) {
    const accumulatedData = {};
    const bottles = {};
    const order = [];

    for (const currentElement of data) {
        let [name, quantity] = currentElement.split(' => ');
        quantity = Number(quantity);

        if (!accumulatedData[name]) {
            accumulatedData[name] = 0;
        }

        accumulatedData[name] += quantity;

        if (accumulatedData[name] >= 1000) {
            if (!bottles[name]) {
                bottles[name] = 0;
                order.push(name);
            }
            const newBottles = Math.floor(accumulatedData[name] / 1000);
            bottles[name] += newBottles;
            accumulatedData[name] %= 1000;
        }
    }

    const result = order.map(name => `${name} => ${bottles[name]}`);
    return result.join('\n');
}

const input = [
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
];

const input2 = [
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
];

console.log(produceBottles(input));
console.log(produceBottles(input2));