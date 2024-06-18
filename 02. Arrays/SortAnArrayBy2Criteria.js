function sortArray(array) {
    const sorted = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
    console.log(sorted.join("\n"));
}

sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArray(['test', 'Deny', 'omen', 'Default']);