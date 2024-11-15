function oddOccurrences(input) {

//const words = input.toLowerCase().split(' ')
//  .reduce((acc, word) => {
//    acc[word] = (acc[word] || 0) + 1;
//       return acc;
//       }, {});

//    console.log(JSON.stringify(words));

    const words = {};

    input.toLowerCase()
        .split(' ')
        .forEach((word) => {
        if (words[word] === undefined) {
            words[word] = 1;
        } else {
            words[word] += 1;
        }
    })

    let output = '';

    for (const word in words) {
        if (words[word] % 2 !== 0) {
            output += `${word} `;
        }
    }

    console.log(output);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')