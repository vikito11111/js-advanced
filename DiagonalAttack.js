function diagonalAttack(matrix) {
    let parsedMatrix = matrix.map(row => row.split(' ').map(Number));
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let size = parsedMatrix.length;

    //Calculate sums of both diagonals
    for (let i = 0; i < size; i++) {
        primaryDiagonalSum += parsedMatrix[i][i];
        secondaryDiagonalSum += parsedMatrix[i][size - i - 1];
    }

    //Check if the sums are equal
    if (primaryDiagonalSum === secondaryDiagonalSum) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (i !== j && i !== size - j - 1) {
                    parsedMatrix[i][j] = primaryDiagonalSum;
                }      
            }
        }
    }

    //Print the matrix row by row
    for (let row of parsedMatrix) {
        console.log(row.join(' '));
    }
}

diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);