const URL = 'https://restcountries.com/v3.1/all';

const elements = {
    loadBtn: document.querySelector('#btnLoadCountries'),
    countriesWrapper: document.querySelector('#root')
};

elements.loadBtn.addEventListener('click', () => {
    Promise.all([
        fetch(URL).then((response) => response.json()),
        fetch('./template.hbs').then((response) => response.text())
    ])
    .then(([countriesData, templateHbs]) => {
        const template = Handlebars.compile(templateHbs);
        const resultHTML = template({ 
            countries: countriesData 
        });
        
        elements.countriesWrapper.innerHTML = resultHTML;
    })
});