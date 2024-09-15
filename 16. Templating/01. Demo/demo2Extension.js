let myTemplateEngine = require('handlebars');

myTemplateEngine.registerPartial('contact', '<li>{{name}}: {{email}}</li>');

var template = myTemplateEngine.compile('<ul id="contacts">{{#each contacts}}{{>contact}}{{/each}}</ul>');

let context = {contacts: [
    {
        name: 'Pesho',
        email: 'pesho@abv.bg'
    },
    {
        name: 'Gosho',
        email: 'gosho@abv.bg'
    },
    {
        name: 'Misho',
        email: 'misho@abv.bg'
    }]
};

console.log(template(context));