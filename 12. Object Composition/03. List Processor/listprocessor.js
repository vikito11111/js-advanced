function listProcessor(commands) {
    let output = [];

    commands.forEach(element => {
        let [operation, str] = element.split(' ');

        if (operation === 'add') {
            output.push(str);
        }
        else if (operation === 'remove') {
            var index = output.indexOf(str);
    
            if (index !== -1) {
                output.splice(index, 1);
            }
        }
        else if (operation === 'print') {
            console.log(output.join(','));
        }
    });
}

let input = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
let input2 = ['add pesho', 'add george', 'add peter', 'remove peter','print'];

listProcessor(input);
listProcessor(input2);