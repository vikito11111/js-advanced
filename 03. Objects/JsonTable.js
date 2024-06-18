function escapeHtml(text) {
    // Replace special characters with HTML entities to escape HTML
    return text.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/"/g, "&quot;")
               .replace(/'/g, "&#039;");
}

function jsonsToTable(jsonStrings) {
    let html = '<table>\n';

    for (let jsonString of jsonStrings) {
        let employee = JSON.parse(jsonString);

        let name = escapeHtml(employee.name);
        let position = escapeHtml(employee.position);
        let salary = escapeHtml(employee.salary.toString());

        // Add a row to the HTML table
        html += '   <tr>\n';
        html += `       <td>${name}</td>\n`;
        html += `       <td>${position}</td>\n`;
        html += `       <td>${salary}</td>\n`;
        html += '   </tr>\n';
    }

    html += '</table>';

    return html;
}

const input = [
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
];

console.log(jsonsToTable(input));