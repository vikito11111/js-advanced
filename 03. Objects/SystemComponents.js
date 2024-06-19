function sortSystemComponents(data) {
    let parsedData = data.reduce((acc, currElement) => {
        let [systemName, componentName, subcomponentName] = currElement.split('|').map(x => x.trim());

        if (!acc[systemName]) {
            acc[systemName] = {[componentName]: [subcomponentName]};

            return acc;
        }

        if (!acc[systemName[componentName]]) {
            acc[systemName][componentName] = [subcomponentName];

            return acc;
        }

        acc[systemName][componentName] = [...acc[systemName][componentName], subcomponentName];

    return acc;
    }, {});

    let sortedSystems = Object.keys(parsedData).sort((a, b) =>
        Object.keys(parsedData[a]).length - Object.keys(parsedData[b]).length || a.localeCompare(b)
    )

    console.log(sortedSystems);
}

const input = [
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4', 
    'Indice | Session | Default Storage', 
    'Indice | Session | Default Security'
];

sortSystemComponents(input);