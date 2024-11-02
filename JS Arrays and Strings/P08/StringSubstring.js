function stringSubstring(word, text) {

    const regex = new RegExp(`\\b${word}\\b`, 'i');

    if (regex.test(text)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');