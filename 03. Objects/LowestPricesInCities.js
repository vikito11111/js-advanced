function findLowestPrices(data) {
    const productPrices = {};

    for (const currentElement of data) {
        const [town, product, price] = currentElement.split(' | ');
        const priceNum = parseFloat(price);

        if (!productPrices[product] || productPrices[product].price > priceNum) {
            productPrices[product] = { town, price: priceNum };
        }
    }

    for (const product in productPrices) {
        const { town, price } = productPrices[product];
        
        console.log(`${product} -> ${price} (${town})`);
    }
}

const input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];

findLowestPrices(input);