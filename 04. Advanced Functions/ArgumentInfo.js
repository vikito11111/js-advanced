function displayInfo(...data) {
    let arguments = {};

    for (const item of data) {
        console.log(`${typeof(item)}: ${item}`);

        if (!arguments[typeof(item)]) {
            arguments[typeof(item)] = 0;
        }
        arguments[typeof(item)]++;
    }

    for (const [type, count] of Object.entries(arguments).sort((a, b) => b[1] - a[1])) {
        console.log(`${type} = ${count}`);
    }
}

let input = ['cat', 42, function () { console.log('Hello world!'); }];

displayInfo(...input);