function solve() {
    let firstLabel = document.getElementsByTagName('input')[0];
    let secondLabel = document.getElementsByTagName('input')[1];

    let resultContainer = document.querySelector('.result-container');

    let textToConvert = firstLabel.value.toLocaleLowerCase().split(' ');
    let namingConvention = secondLabel.value;

    if (namingConvention === 'Camel Case') {
        let convertedText = textToConvert.map((word, index) => {
            if (index === 0) {
                return word;
            }
            else {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
        }).join('');

        resultContainer.textContent += convertedText;
    }
    else if (namingConvention === 'Pascal Case') {
        let convertedText = textToConvert.map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toLocaleUpperCase() + word.slice(1);
            }
            else {
                return word.charAt(0).toLocaleUpperCase() + word.slice(1);
            }
        }).join('');

        resultContainer.textContent += convertedText;
    }
    else {
        resultContainer.textContent += 'Error!';
    }
}