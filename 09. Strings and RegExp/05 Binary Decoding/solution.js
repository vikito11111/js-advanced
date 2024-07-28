function solve() {
	let input = document.getElementById('input').value;

	let resultRef = document.getElementById('resultOutput');

	let num = input.split('').map(x => Number(x)).reduce((acc, number) => acc + number, 0);

	while (num > 9) {
		num = num.toString().split('').map(x => Number(x)).reduce((acc, number) => acc + number, 0);
	}

	let parsedNumber = input.slice(num, input.length - num);

	let chars = [];

	for (let i = 0; i < Math.ceil(parsedNumber.length / 8); i++) {
		chars.push(String.fromCharCode(parseInt(parsedNumber.slice(i * 8, (i + 1) * 8), 2)));
	}

	resultRef.innerHTML = chars.filter(x => x.match(/[A-Za-z ]/)).join('');
}