function cityMaker(data) {
    const townsProduction = {};

    for (const currentElement of data) {
        let [town, product, productSalesInfo] = currentElement.split(' -> ');
        let [amountOfSales, priceForUnit] = productSalesInfo.split(' : ');

        const totalIncome = Number(amountOfSales) * Number(priceForUnit); 

        if (!townsProduction[town]) {
            townsProduction[town] = {};
        }

        if (!townsProduction[town][product]) {
            townsProduction[town][product] = 0;
        }
        
        townsProduction[town][product] += totalIncome;
    }

    for (const town in townsProduction) {
        console.log(`Town - ${town}`);
        for (const product in townsProduction[town]) {
            console.log(`$$$${product} : ${townsProduction[town][product]}`);
        }
    }
}

const input = [
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
];

cityMaker(input);