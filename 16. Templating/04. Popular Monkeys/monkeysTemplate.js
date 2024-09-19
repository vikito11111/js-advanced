import { monkeys } from './monkeys.js';

(async () => {
    Handlebars.registerPartial('monkey', await fetch('./monkey-template.hbs').then((response) => response.text()));

    const templateSrc = await fetch('./monkeys-template.hbs').then((response) => response.text());
    const template = Handlebars.compile(templateSrc);
    const resultHTML = template({monkeys});

    document.querySelector('section').innerHTML += resultHTML;
})();