function solve() {
    let input = JSON.parse(document.getElementById('array').value);

    let specialKey = input[0];

    let text = input.slice(1).join('\n');
    
    function decodeMessage(message) {
        return message.replace(/!/g, '1')
            .replace(/%/g, '2')
            .replace(/#/g, '3')
            .replace(/\$/g, '4')
            .replace(/[A-Z]/g, match => match.toLowerCase());
    }

    let regex = new RegExp(`\\b${specialKey}\\s+([!%#$A-Z]{8,})(?=[.,\\s]|$)`, 'gi');

    let result = text.replace(regex, (match, p1) => {
        return match.replace(p1, decodeMessage(p1));
    });

    document.getElementById('result').textContent = result;
}