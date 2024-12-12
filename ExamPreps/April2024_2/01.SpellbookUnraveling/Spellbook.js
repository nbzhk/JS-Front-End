function spellBookUnravelling(input) {
    let spell = input.shift();

    let command = input.shift();

    while (command !== 'End') {

        const commandsArr = command.split('!');

        switch (commandsArr[0]) {
            case 'RemoveEven':

                spell = spell.split('')
                    .filter((_, i) => i % 2 === 0)
                    .join('');

                console.log(spell);
                break;
            case 'TakePart':
                const fromIndex = commandsArr[1];
                const toIndex = commandsArr[2];

                spell = spell.substring(fromIndex, toIndex);

                console.log(spell);

                break;
            case 'Reverse':
                const substring = commandsArr[1];

                if (!spell.includes(substring)) {
                    console.log('Error')
                } else {

                    const reversedSubstring = substring.split('').reverse().join('');

                    spell = spell.replace(substring,'') + reversedSubstring;

                    console.log(spell);
                }
                break;

        }


        command = input.shift();
    }

    console.log(`The concealed spell is: ${spell}`);
}

spellBookUnravelling(
    (["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
        "TakePart!31!42",
        "RemoveEven",
        "Reverse!anim",
        "Reverse!sad",
        "End"])
);