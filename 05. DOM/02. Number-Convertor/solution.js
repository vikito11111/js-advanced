function solve() {
    let optionsList = document.querySelectorAll("#selectMenuTo")[0];

    let button = document.querySelector('button');                  //document.querySelector("container button");

    let input = document.querySelector('#input');

    let resultLabel = document.getElementById('result');

    optionsList.innerHTML = `
    <option selected value=""></option>
    <option value="hexadeicmal">Hexadeicmal</option>
    <option value="binary">Binary</option>`;

    button.addEventListener('click', () => {
        let result;

        if (optionsList.value === 'binary') {
            result = (Number(input.value)).toString(2);
        }
        else if (optionsList.value === 'hexadeicmal') {
            result = (Number(input.value)).toString(16).toUpperCase();
        }

        resultLabel.value = result;
    })
}