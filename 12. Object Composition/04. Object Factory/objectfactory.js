function composeObj(input) {
    let objectsArray = JSON.parse(input);
    
    let composedObject = {};

    objectsArray.forEach(obj => {
        Object.assign(composedObject, obj);
    });

    console.log(composedObject);
}

let input = `[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`;
let input2 = `[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`;

composeObj(input);
composeObj(input2);