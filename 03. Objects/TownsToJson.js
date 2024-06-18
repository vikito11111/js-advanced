function dataToJson(data) {
    let dataToParse = data.slice(1);

    let parsedData = dataToParse.reduce((acc, currValue) => {
        let [ , town, latitude, longitude ] = currValue.split('|').map(x => x.trim());

        const latitudeNum  = parseFloat(latitude).toFixed(2);
        const longitudeNum = parseFloat(longitude).toFixed(2);

        acc.push({
            "Town": town,
            "Latitude": Number(latitudeNum),
            "Longitude": Number(longitudeNum)
        });

        return acc;
    }, []);

    return JSON.stringify(parsedData);
}

console.log(dataToJson([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));