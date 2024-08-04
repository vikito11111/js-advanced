function solve() {
    const rows = document.querySelectorAll('tbody tr');

    let lastClickedRow = null;

    rows.forEach(row => {
        row.addEventListener('click', () => {
            if (lastClickedRow) {
                lastClickedRow.style.backgroundColor = '';
            }

            if (lastClickedRow === row) {
                lastClickedRow = null;
            } 
            else {
                row.style.backgroundColor = '#413f5e';
                
                lastClickedRow = row;
            }
        });
    });
}