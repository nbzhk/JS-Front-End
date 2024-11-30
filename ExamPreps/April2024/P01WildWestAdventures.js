function wildWestAdventures(input) {

    const numberOfCharacters = input.shift();
    const posse = {};

    for (let i = 0; i < numberOfCharacters; i++) {
        const [name, hpInput, bulletsInput] = input.shift().split(' ');

        posse[name] = {
            hp: Number(hpInput),
            bullets: Number(bulletsInput),
        };
    }

    let command = input.shift();

    while (command !== 'Ride Off Into Sunset') {
        const commandElements = command.split(' - ');
        const currentCharacter = posse[commandElements[1]];

        switch (commandElements[0]) {
            case 'FireShot':
                if (currentCharacter.bullets > 0) {
                    currentCharacter.bullets -= 1;
                    console.log(`${commandElements[1]} has successfully hit ${commandElements[2]} and now has ${currentCharacter.bullets} bullets!`);
                } else {
                    console.log(`${commandElements[1]} doesn't have enough bullets to shoot at ${commandElements[2]}!`);
                }
                break;
            case 'TakeHit':
                currentCharacter.hp -= Number(commandElements[2]);

                if (currentCharacter.hp > 0) {
                    console.log(`${commandElements[1]} took a hit for ${commandElements[2]} HP from ${commandElements[3]} and now has ${currentCharacter.hp} HP!`);
                } else {
                    delete posse[commandElements[1]];
                    console.log(`${commandElements[1]} was gunned down by ${commandElements[3]}!`);
                }
                break;
            case 'Reload':
                if (currentCharacter.bullets < 6) {
                    const currentBullets = currentCharacter.bullets;
                    currentCharacter.bullets = 6;
                    console.log(`${commandElements[1]} reloaded ${6 - currentBullets} bullets!`);
                } else {
                    console.log(`${commandElements[1]}'s pistol is fully loaded!`)
                }
                break;
            case 'PatchUp':
                if (currentCharacter.hp < 100) {
                    const oldHp = currentCharacter.hp;
                    const amountHealHp = Number(commandElements[2]);

                    currentCharacter.hp = (currentCharacter.hp + amountHealHp > 100) ? 100 : currentCharacter.hp + amountHealHp;

                    console.log(`${commandElements[1]} patched up and recovered ${currentCharacter.hp - oldHp} HP!`)
                } else {
                    console.log(`${commandElements[1]} is in full health!`)
                }
                    break;
        }

        command = input.shift();
    }

    for (const character in posse) {
        const {hp, bullets} = posse[character];
        console.log(`${character}\n HP: ${hp}\n Bullets: ${bullets}`)
    }

}

wildWestAdventures(["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"]);