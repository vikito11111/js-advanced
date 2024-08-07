function modifyObj(commands) {
    let cars = [];
    
    commands.forEach(command => {
        const parts = command.split(' ');

        if (parts[0] === 'create') {
            const name = parts[1];

            if (parts.length === 4) {
                const parentName = parts[3];

                cars[name] = Object.create(cars[parentName]);
            }
            else {
                cars[name] = {};
            }
        }
        else if (parts[0] === 'set') {
            const name = parts[1];
            const propertyName = parts[2];
            const propertyValue = parts[3];

            cars[name][propertyName] = propertyValue;
        }
        else if (parts[0] === 'print') {
            const name = parts[1];

            let result = [];

            for (const key in cars[name]) {
                result.push(`${key}:${cars[name][key]}`);
            }

            console.log(result.join(', '));
        }
    });
}

let input = [
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
];

modifyObj(input);