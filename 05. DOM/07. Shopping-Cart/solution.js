function solve() {
   let addProductButtons = document.querySelectorAll('.add-product');

   let checkOutButton = document.querySelector('button[class="checkout"]');

   let textArea = document.querySelector('textarea');

   let cart = [];

   addProductButtons.forEach(button => {
      button.addEventListener('click', () => {
         let productElement = button.closest('.product');

         let name = productElement.querySelector('.product-title').textContent;

         let price = parseFloat(productElement.querySelector('.product-line-price').textContent);

         cart.push({name, price});

         textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      });
   });

   checkOutButton.addEventListener('click', () => {
      let uniqueProducts = [...new Set(cart.map(item => item.name))].join(', ');

      let totalPrice = 0;

      for (const item of cart) {
         totalPrice += item.price;
      }

      totalPrice = totalPrice.toFixed(2);

      textArea.value += `You bought ${uniqueProducts} for ${totalPrice}.\n`;
   });
}