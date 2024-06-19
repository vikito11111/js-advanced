function storeCatalogue(data) {
    let parsedData = data.reduce((acc, currentElement) => {
        let [name, price] = currentElement.split(':').map(x => x.trim());

        //We can use acc.push() as well
        if (acc[name[0]]) {
            acc[name[0]] = [...acc[name[0]], currentElement];
        }
        else {
            acc[name[0]] = [currentElement];
        }

        return acc;
    }, {});

    Object.keys(parsedData).sort().map(x => {
        console.log(x);
        
        parsedData[x].sort().map(y => {
            console.log(` ${y.split(' : ').join(': ')}`);
        })
    })
}

const input = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25', 
    'Anti-Bug Spray : 15', 
    'T-Shirt : 10'
];

storeCatalogue(input);