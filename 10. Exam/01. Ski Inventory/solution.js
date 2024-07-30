function solve() {
   let productNameInput = document.querySelector('#add-new input[placeholder="Name"]');
   let productQuantityInput = document.querySelector('#add-new input[placeholder="Quantity"]');
   let productPriceInput = document.querySelector('#add-new input[placeholder="Price"]');
   let filterInput = document.querySelector('#products .filter input[type="text"]');

   let addButton = document.querySelector('#add-new button');
   let filterButton = document.querySelector('#products .filter button');
   let buyButton = document.querySelector('#myProducts button');

   let productsUl = document.querySelector('#products ul');
   let myProductsUl = document.querySelector('#myProducts ul');

   let totalPriceLabel = document.getElementsByTagName('h1')[1];

   let totalPrice = 0;

   function isNumber(value) {
      return !isNaN(value) && value.trim() !== '';
   }

   function showError(message) {
      alert(message);
   }

   addButton.addEventListener('click', (e) => {
      e.preventDefault();

      if (!isNumber(productQuantityInput.value) || !isNumber(productPriceInput.value)) {
         showError("Please enter valid numbers for Quantity and Price.");
         return;
      }

      let li = document.createElement("li");

      let nameSpan = document.createElement("span");
      nameSpan.textContent = productNameInput.value;

      let quantityStrong = document.createElement("strong");
      quantityStrong.textContent = `Avaliable: ${Number(productQuantityInput.value)}`;

      let div = document.createElement("div");

      let priceStrong = document.createElement("strong");
      priceStrong.textContent = Number(productPriceInput.value);

      let button = document.createElement("button");
      button.textContent = "Add to Client's List";

      div.appendChild(priceStrong);
      div.appendChild(button);

      li.appendChild(nameSpan);
      li.appendChild(quantityStrong);
      li.appendChild(div);

      productsUl.appendChild(li);

      productNameInput.value = '';
      productPriceInput.value = '';
      productQuantityInput.value = '';

      button.addEventListener('click', (e) => {
         let currentQuantity = Number(quantityStrong.textContent.split(': ')[1]);

         if (currentQuantity > 0) {
            let myProductLi = document.createElement('li');
            
            let myProductPriceStrong = document.createElement('strong');
            myProductPriceStrong.textContent = priceStrong.value;
            
            myProductLi.textContent = nameSpan.textContent;

            myProductLi.appendChild(myProductPriceStrong);

            myProductsUl.appendChild(myProductLi);

            currentQuantity--;
            quantityStrong.textContent = `Available: ${currentQuantity}`;

            if (currentQuantity === 0) {
               li.parentElement.removeChild(li);
            }

            totalPrice += Number(priceStrong.textContent);
            totalPriceLabel.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
         }
      })
   });

   filterButton.addEventListener('click', () => {
      let searchStr = filterInput.value.toLowerCase();

      let products = productsUl.querySelectorAll('li');

      products.forEach(product => {
         let productNameSpan = product.getElementsByTagName('span')[0];
         
         if (productNameSpan) {
            let productName = productNameSpan.textContent.toLowerCase();

            if (productName.includes(searchStr)) {
               product.style.display = '';
            }
            else {
               product.style.display = 'none';
            }
         }
      });

      filterInput.value = '';
   });

   buyButton.addEventListener('click', () => {
      while (myProductsUl.firstChild) {
         myProductsUl.removeChild(myProductsUl.firstChild);
      }

      totalPrice = Number(0.00);
      totalPriceLabel.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
   });
}