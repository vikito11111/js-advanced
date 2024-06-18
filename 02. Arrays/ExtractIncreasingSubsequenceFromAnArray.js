function extractIncreasingSubsequence(array){
    let currentBiggestNum = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (currentBiggestNum < array[i]) {
            currentBiggestNum = array[i];
            console.log(currentBiggestNum);
        }
    }
}

extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequence([1, 2, 3, 4]);
extractIncreasingSubsequence([20, 3, 2, 15, 6, 1]);