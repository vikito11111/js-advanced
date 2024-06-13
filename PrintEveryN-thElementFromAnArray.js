function printElements(array){
    let step = Number(array.pop());
    for (let i = 0; i < array.length; i += step) {
        console.log(array[i]);
    }
}

printElements(['5', '20', '31', '4', '20', '2']);

printElements(['dsa', 'asd', 'test', 'tset', '2']);