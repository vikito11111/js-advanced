function countWords(input) {
    const wordsCount = {};

    const splitStr = input.map(x => x.split(/[\s,.,;:!?\-']+/))
        .flat()
        .filter(word => /^[a-zA-Z]+$/.test(word));

    for (let i = 0; i < splitStr.length; i++) {
        if (!wordsCount[splitStr[i]]) {
            wordsCount[splitStr[i]] = 0;
        }
        
        wordsCount[splitStr[i]]++;
    }

    return JSON.stringify(wordsCount);
}

const input = [
    'JS devs use Node.js for server-side JS.-- JS for devs'
];

console.log(countWords(input));