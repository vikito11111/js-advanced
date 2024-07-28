function solve() {
    let key = document.getElementById('string').value;
    let message = document.getElementById('text').value;
    let resultRef = document.getElementById('result');
    
    let saveMessage = message.match(`${key}(.+)${key}`)[1];

    let ourRegex = new RegExp(/(?<direction>east|north).*?(?<coordinate>\d{2}).*?,.*?(?<decimal>\d{6})/gmi);
    
    let north;
    let east;
    let temp = ourRegex.exec(message);

    while (temp) {
        console.log(temp);

        if (temp[1].toLowerCase() === 'east') {
            east = `${temp[2]}.${temp[3]}`;
        }
        else {
            north = `${temp[2]}.${temp[3]}`;
        }

        temp = ourRegex.exec(message);
    }

    resultRef.innerHTML = `
    <p>${north} N</p>
    <p>${east} E</p>
    <p>Message: ${saveMessage}</p>`;
}