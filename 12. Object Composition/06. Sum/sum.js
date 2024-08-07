function solver() {
    let firstNumber = document.getElementById('num1');
    let secondNumber = document.getElementById('num2');

    let sumButton = document.getElementById('sumButton');
    let subtractButton = document.getElementById('subtractButton');

    let resultLabel = document.getElementById('result');

    sumButton.addEventListener('click', () => {
        resultLabel.value = Number(firstNumber.value) + Number(secondNumber.value);
    });

    subtractButton.addEventListener('click', () => {
        resultLabel.value = Number(firstNumber.value) - Number(secondNumber.value);
    });
}

document.addEventListener('DOMContentLoaded', solver);