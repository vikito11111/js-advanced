function rotateArray(array){
    let rotationNumber = Number(array.pop()) % (array.length);

    for (let i = 0; i < rotationNumber; i++) {
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);