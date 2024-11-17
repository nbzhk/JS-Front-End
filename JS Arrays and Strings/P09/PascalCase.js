function pascalCase(string) {

    const regex = /[A-Z][a-z]*/g;

    let wordsArr = string.match(regex);

    console.log(wordsArr.join(', '))

}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCase('HoldTheDoor');