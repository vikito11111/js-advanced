function townPopulation(data) {
    const townsPopulation = {};

    for (const currentElement of data) {
        let [town, population] = currentElement.split(' <-> ');

        if (!townsPopulation[town]) {
            townsPopulation[town] = 0;
        }

        townsPopulation[town] += Number(population);
    }

    for (const town in townsPopulation) {
        console.log(`${town} : ${townsPopulation[town]}`);
    }
}

const input = [
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
];

const input2 = [
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
];

townPopulation(input);
townPopulation(input2);