let myTemplateEngine = (function() {
    var startDelimiter = '{{';
    var endDelimiter = '}}';
    var searchString = `${startDelimiter}?([A-Za-z]+)${endDelimiter}`;

    var setDelimiters = function(start, end) {
        startDelimiter = start || startDelimiter;
        endDelimiter = end || endDelimiter;
        searchString = `${startDelimiter}?([A-Za-z]+)${endDelimiter}`;
    }
    
    var compile = function(template) {
        var searchExpression = new RegExp(searchString);

        return function(obj) {
            var match;
            var result = template;

            while (match = searchExpression.exec(result)) {
                result = result.replace(match[0], obj[match[1]]);
            }

            return result;
        };
    };

    return {
        compile: compile,
        setDelimiters: setDelimiters
    };
}());

var template = myTemplateEngine.compile('Hello, my name is {{name}} {{familyName}}!');

console.log(template({ 
    name: 'Pesho', 
    familyName: 'Petrov' 
}));
console.log(template({ 
    name: 'Misho', 
    familyName: 'Ivanov' 
}));

myTemplateEngine.setDelimiters('@@', '@@');

console.log(template({ 
    name: 'Ivan', 
    familyName: 'Atanasov' 
}));

var newTemplate = myTemplateEngine.compile('Hello from new @@name@@!');

console.log(newTemplate({ 
    name: 'Sofia'
}));