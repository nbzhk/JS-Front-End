function moderTimes(sentence) {

    let words = [];

    let regex = /#[a-zA-Z]+/;

    sentence.split(/\s/g).forEach( (word) => {
        if( regex.test(word)) {
            words.push(word.replace('#', ''));
        } 
    });

    words.forEach( (word) => {
        console.log(word);
    })
}

moderTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
moderTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');