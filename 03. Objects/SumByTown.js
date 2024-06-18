function sumByTown(data) {
    const result = {};

    let arrayLength = data.length;

    for (let i = 0; i < arrayLength; i += 2) {
        let currentCity = data[i];
        let currentIncome = Number(data[i+1]);

        if (!result[currentCity]) {
            result[currentCity] = 0;
        }

        result[currentCity] += currentIncome;
    }
    
    return JSON.stringify(result);
}

const input = [
    'Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'
];

console.log(sumByTown(input));