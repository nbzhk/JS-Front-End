function printCharsInRange(char1, char2) {

    const startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    const endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let result = '';

    for (let i = startChar + 1; i < endChar; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    console.log(result);
    
}

printCharsInRange('a', 'd');
printCharsInRange('#', ':');
printCharsInRange('C', '#');