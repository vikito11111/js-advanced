function lockedProfile() {
    const buttons = document.querySelectorAll('div#container main#main div.profile button');

    [...buttons]
    .forEach((button) => {
        button.addEventListener('click', (e) => {
            const divSibling = e.currentTarget.parentNode.children[9];                  //const parent = e.currentTarget.previousElementSibling;

            const selector = divSibling.id.split('HiddenFields')[0];

            const lockInput = document.querySelector(`input[name="${selector + 'Locked'}"]`);

            if (!lockInput.checked && button.textContent === "Show More") {

                divSibling.style.display = "block";

                button.textContent = "Hide it";
            }
            else if (!lockInput.checked) {
                divSibling.style.display = "none";

                button.textContent = "Show more";
            }
        });
    });
}