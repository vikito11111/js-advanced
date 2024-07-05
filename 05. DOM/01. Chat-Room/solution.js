function solve() {
   let sendDocument = document.getElementById('send');

   let textToShow = document.getElementById('chat_input');

   let messageField = document.getElementById('chat_messages'); 

   sendDocument.addEventListener('click', (e) => {
      let newElement = document.createElement('div');

      newElement.innerHTML = textToShow.value;

      newElement.classList.add('message', 'my-message');

      messageField.appendChild(newElement);
   })
}


