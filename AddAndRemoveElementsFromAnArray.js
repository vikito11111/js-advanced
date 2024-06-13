function addRemoveElements(inputCommands){
    const array = [];
    for (let i = 0; i < inputCommands.length; i++) {
        if (inputCommands[i] === 'add') {
            array.push(i+1);
        }
        else if (inputCommands[i] === 'remove') {
            array.pop();
        }
    }
    console.log(array.length > 0 ? array.join(' ') : 'Empty');

    /*if (array.length === 0) {
        console.log('Empty');
    }
    else{
        array.forEach(element => {
            console.log(element);
        });
    }*/
}

addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);