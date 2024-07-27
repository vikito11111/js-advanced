function solve(input) {
    let input = JSON.parse(document.getElementById('arr').value);

    let res = [];

    let rgx = /^(?<name>[A-Z][a-z]* [A-Z][a-z]+) (?<phone>\+359( |-)[0-9]{1}\3[0-9]{3}\3[0-9]{3}) (?<email>[a-z0-9]+@[a-z]+\.[a-z]{2,3})/;

    for (let i = 0; i < input.length; i++) {
        if (rgx.test(input[i])) {
            let match = rgx.exec(input[i]);

            res.push(`Name: ${match[1]}`);
            res.push(`Phone Number: ${match[2]}`);
            res.push(`Email: ${match[4]}`);
            res.push('- - -');
        }
        else {
            res.push('Invalid data');
            res.push('- - -');
        }
    }

    document.getElementById('result').innerHTML = `<br /> ${res.join('<br />')}`;
}

//solve(["George Smith +359 2 123 456 George@gmail.com", "G Sg +359-5-759-684 valid@gmail.com", "Smith +359-5 789 654 smith@gmail.com"]);