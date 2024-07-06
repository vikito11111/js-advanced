function solve() {
    let button = document.querySelector('button[type="button"]');

    let inputBox = document.querySelector('input[type="text"]');

    let ol = document.querySelector('ol');

    button.addEventListener('click', () => {
        let name = inputBox.value.trim();

        if (name) {
            let firstLetter = name[0].toUpperCase();

            let index = firstLetter.charCodeAt(0) - 65;
            
            let li = ol.children[index];

            if (li.innerHTML) {
                let existingNames = li.innerHTML.split(', ');
                
                existingNames.push(name);

                existingNames.sort();

                li.innerHTML = existingNames.join(', ');
            }
            else {
                li.innerHTML = name;
            }

            inputBox.value = '';
        }
    });
}