(() => {
    const BASE_ULR = 'https://judgetests.firebaseio.com/locations.json';

    const elements = {
        locationInput: document.querySelector('#location'),
        button: document.querySelector('#submit'),
        notificationHandling: document.querySelector('h1.notification')
    };

    const errorHandler = (err) => {
        console.log(err);

        elements.notificationHandling.textContent = err.message;
    };

    const jsonMiddleware = (response) => {
        response.json();
    };

    elements.button.addEventListener('click', getLocationValue);

    function getLocationValue() {
        const location = elements.locationInput.value;
        
        fetch(BASE_ULR)
            .then(jsonMiddleware)
            .then((data) => {
                const locationData = data.find((o) => o.name === location);
            })
            .catch(errorHandler);
    }
})();