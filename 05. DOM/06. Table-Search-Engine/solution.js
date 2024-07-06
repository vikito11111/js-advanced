function solve() {
   let searchButton = document.querySelector('button[type="button"]');

   let searchLabel = document.getElementById('searchField');

   let tableBody = document.querySelector('table.container tbody');

   searchButton.addEventListener('click', () => {
      let searchInput = searchLabel.value.toLowerCase();

      let rows = tableBody.querySelectorAll('tr');

      rows.forEach(row => {
         row.classList.remove('select');
      });

      if (searchInput.trim() === '') {
         return;
      }

      rows.forEach(row => {
         let rowText = row.textContent.toLowerCase();

         if (rowText.includes(searchInput)) {
            row.classList.add('select');
         }
      });
   });
}