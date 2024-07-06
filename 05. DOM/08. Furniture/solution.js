function solve() {
  let inputTextarea = document.getElementsByTagName('textarea')[0];

  let resultTextarea = document.getElementsByTagName('textarea')[1];

  let generateButton = document.getElementsByTagName('button')[0];

  let buyButton = document.getElementsByTagName('button')[1];

  let tableBody = document.querySelector('table[class="table"] tbody');

  generateButton.addEventListener('click', () => {
    let furnitureToAdd = JSON.parse(inputTextarea.value);

    furnitureToAdd.forEach(element => {
      let tableRow = document.createElement("tr");

      let imgTd = document.createElement("td");
      let imgElement = document.createElement("img");
      imgElement.src = element.img;
      imgTd.appendChild(imgElement);
      tableRow.appendChild(imgTd);

      let nameTd = document.createElement("td");
      nameTd.textContent = element.name.trim();
      tableRow.appendChild(nameTd);

      let priceTd = document.createElement("td");
      priceTd.textContent = element.price;
      tableRow.appendChild(priceTd);

      let decFactorTd = document.createElement("td");
      decFactorTd.textContent = element.decFactor;
      tableRow.appendChild(decFactorTd);

      let markTd = document.createElement("td");
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      markTd.appendChild(checkBox);
      tableRow.appendChild(markTd);

      tableBody.appendChild(tableRow);

      inputTextarea.value = '';
    });
  });

  buyButton.addEventListener('click', () => {
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

    let boughtItems = [];

    let totalPrice = 0;

    let totalDecFactor = 0;
    
    let count = 0;

    checkBoxes.forEach(checkBox => {
      if (checkBox.checked) {
        let row = checkBox.closest("tr");
        let name = row.children[1].textContent.trim();
        let price = Number(row.children[2].textContent);
        let decFactor = Number(row.children[3].textContent);

        boughtItems.push(name);
        totalPrice += price;
        totalDecFactor += decFactor;
        count++;
      }

      let averageDecFactor = totalDecFactor / count || 0;

      let boughtFurnitureString = boughtItems.join(', ').trim();
      
      if (boughtFurnitureString.length > 0) {
        resultTextarea.value = `Bought furniture: ${boughtFurnitureString}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor.toFixed(2)}`;
      }
    })
  });
}