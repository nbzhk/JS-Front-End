function findWords(words, sentence) {

    const wordsArr = words.split(', ');

    wordsArr.forEach( (word) => {
        const searchValue = "*".repeat(word.length);

        sentence = sentence.replace(searchValue, word);
    });

    console.log(sentence);
}

findWords('great, learning','softuni is ***** place for ******** new programming languages')