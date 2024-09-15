const URL = 'https://restcountries.com/v3.1/all';

fetch(URL)
.then((response) => response.json())
.then((data) => {

})
.catch((err) => {

});

const elements = {
    loadBtn: document.getElementById('#btnLoadCountries')
};

elements.loadBtn.addEventListener('click', () => {
    fetch('./template.hbs')
    .then((response) => response.text())
    .then((data) => {
        console.log(data);
    })
})