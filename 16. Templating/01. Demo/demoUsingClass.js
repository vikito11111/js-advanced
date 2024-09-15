class TemplateEngine {
    constructor(start, end) {
        this.startDelimiter = start;
        this.endDelimiter = end;
        this.searchExpression = `${this.startDelimiter}?([A-Za-z]+)${this.endDelimiter}`;
    }

    compile(template) {
        var searchExpression = new RegExp(this.searchExpression);

        return function(obj) {
            var match;
            var result = template;

            while (match = searchExpression.exec(result)) {
                result = result.replace(match[0], obj[match[1]]);
            }

            return result;
        };
    };
}

var myTemplateEngine = new TemplateEngine('{{', '}}');
var template = myTemplateEngine.compile('Hello, my name is {{name}} {{familyName}}!');

console.log(template({ 
    name: 'Pesho', 
    familyName: 'Petrov' 
}));
console.log(template({ 
    name: 'Misho', 
    familyName: 'Ivanov' 
}));
console.log(template({ 
    name: 'Ivan', 
    familyName: 'Atanasov' 
}));