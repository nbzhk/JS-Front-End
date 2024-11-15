function repeatCounter(input) {

    const searchedWords =  {};

    input[0].split(' ').forEach(word => {
        searchedWords[word] = 0;
    });

    for (let i = 1; i < input.length; i++) {
        if (searchedWords.hasOwnProperty(input[i].trim())) {
            searchedWords[input[i]] ++;
        }
    }

    Object.entries(searchedWords)
        .sort(([, countA], [, countB]) => countB - countA)
        .forEach(([word, count]) => {console.log(`${word} - ${count}`)});

}

repeatCounter([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

repeatCounter([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);